import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  UserRound, Phone, Mail, Calendar as CalIcon, MapPin, Map, ChevronDown,
  X, Check, Search, ChevronLeft, ChevronRight
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

/* ================== DEBUG UTILS ================== */
const DEBUG = typeof window !== "undefined" && (window.__BOOKING_DEBUG__ ?? (process.env.NODE_ENV !== "production"));
const log = (...a) => DEBUG && console.log("%c[BookingForm]","color:#592eff;font-weight:600",...a);
const warn = (...a) => DEBUG && console.warn("[BookingForm]", ...a);
const err = (...a) => DEBUG && console.error("[BookingForm]", ...a);

/* ================== API HELPERS ================== */
const ENDPOINT = {
  save: "/api/bookings/save-step",      // maps to saveStepData
  create: "/api/bookings/create",        // maps to createBooking
  confirm: "/api/bookings/confirm",      // maps to confirmBooking
};

async function postJSON(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; }
  catch { throw new Error(`HTTP ${res.status} ${res.statusText} — Non-JSON: ${text.slice(0,200)}`); }
  if (!res.ok || data?.success === false) {
    throw new Error(`HTTP ${res.status} ${res.statusText} — ${data?.message || "Request failed"}`);
  }
  return data;
}

async function ensureRazorpay(){
  if (window.Razorpay) return true;
  return new Promise((resolve, reject)=>{
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    s.onload = ()=> resolve(true);
    s.onerror = ()=> reject(new Error("Razorpay script failed to load"));
    document.head.appendChild(s);
  });
}

/* ================== UI BASICS ================== */
const ASSETS = {
  user: "/user.svg",
  phone: "/phone.svg",
  mail: "/mail.svg",
  plan: "/plan.svg",
  service: "/service.svg",
  calendar: "/calendar.svg",
  pincode: "/pin.svg",
  address: "/address.svg",
  chevronDown: "/chev-down.svg",
  close: "/close.svg",
  check: "/check.svg",
  search: "/search.svg",
  chevronLeft: "/chev-left.svg",
  chevronRight: "/chev-right.svg",
};

const cn = (...a) => a.filter(Boolean).join(" ");
const Img = ({ src, alt = "", className = "" }) =>
  <img src={src} alt={alt} className={cn("w-4 h-4 object-contain", className)} />;

/* Base fields (56px height) */
const BaseInput = ({ className = "", leftIcon, leftImg, ...props }) => (
  <div className="relative">
    {leftImg ? (
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">
        <Img src={leftImg} />
      </span>
    ) : leftIcon ? (
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">{leftIcon}</span>
    ) : null}
    <input
      {...props}
      className={cn(
        "w-full h-14 rounded-lg",
        "bg-white/90 placeholder-black/40",
        "border border-black/10 focus:border-[#592eff]/40",
        "focus:outline-none focus:ring-2 focus:ring-[#592eff]/25",
        (leftImg || leftIcon) ? "pl-10" : "pl-3",
        "pr-3 text-sm text-black",
        className
      )}
    />
  </div>
);

const ClickField = React.forwardRef(function ClickField(
  { leftIcon, leftImg, rightIcon, rightImg, value, placeholder = "", onClick },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={cn(
        "w-full h-14 rounded-lg text-left relative",
        "bg-white/90",
        "border border-black/10 focus:border-[#592eff]/40",
        "focus:outline-none focus:ring-2 focus:ring-[#592eff]/25",
        "pl-10 pr-9 text-sm text-black"
      )}
    >
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">
        {leftImg ? <Img src={leftImg} /> : leftIcon}
      </span>
      <span className={cn(!value && "text-black/40")}>{value || placeholder}</span>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40">
        {rightImg ? <Img src={rightImg} /> : rightIcon}
      </span>
    </button>
  );
});

/* Data */
const PLAN_OPTIONS = [
  { id: "quick",   line1: "15 minutes · Google Meet",         line2: "Quick Advice Call",       price: 99  },
  { id: "home",    line1: "One-on-one at your location",      line2: "Home-Visit Consultation", price: 399 },
  { id: "premium", line1: "calls + follow-ups · Home visits", line2: "Premium Monthly Support", price: 599 },
];

const SERVICE_OPTIONS = [
  { id: "insurance", label: "INSURANCE" },
  { id: "loan",      label: "LOAN" },
  { id: "invest",    label: "INVESTMENT" },
];

const PINCODES = [
  "110001","110002","110003","110004","110005","110006","110007","110008",
  "110009","110010","110011","110012","110013","110014","110015","110016",
  "110017","110018","110019","110020","110021","110022","110023","110024",
  "110025","110026","110027","110028","110029","110030","110031","110032",
  "110033","110034","110035","110036","110037","110038","110039","110040",
  "110041","110042","110043","110044","110045","110046","110047","110048",
  "110049","110050","110051","110052","110053","110054","110055","110056",
  "110057","110058","110059","110060","110061","110062","110063","110064",
  "110065","110066","110067","110068","110069","110070","110071","110072",
  "110073","110074","110075","110076","110077","110078","110079","110080",
  "110081","110082","110083","110084","110085","110086","110087","110088",
  "110089","110090","110091","110092"
];

/* Modal shell (centered inside card) */
function ModalShell({ title, onClose, width = "w-[520px]", children }) {
  return (
    <div className="absolute inset-0 z-50 grid place-items-center">
      <button aria-hidden onClick={onClose} className="absolute inset-0 rounded-2xl bg-black/10 backdrop-blur-[1px]" />
      <div className={cn(
        "relative rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]",
        "ring-1 ring-black/10 max-w-[92vw]",
        width
      )}
      role="dialog">
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="text-sm font-medium text-black/70">{title}</div>
          <button onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/5" aria-label="Close">
            {ASSETS.close ? <Img src={ASSETS.close} /> : <X className="w-4 h-4" />}
          </button>
        </div>
        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  );
}

/* Specific modals */
function PlanModal({ open, onClose, value, onChange }) {
  if (!open) return null;
  return (
    <ModalShell title="Choose Your Plan" onClose={onClose} width="w-[560px]">
      <div className="space-y-3">
        {/* Placeholder option so user can clear selection */}
        <button
          onClick={() => { onChange(null); onClose(); }}
          className={cn(
            "w-full rounded-xl border px-5 py-4 text-left flex items-center gap-3",
            !value ? "border-[#ffc73c] bg-[#fff6e0]" : "border-dashed border-black/10 hover:bg-black/5"
          )}
        >
          {ASSETS.plan && <Img src={ASSETS.plan} className="opacity-50" />}
          <span className="text-sm font-medium text-black/60">Select your plan</span>
        </button>

        {PLAN_OPTIONS.map((o) => {
          const active = value?.id === o.id;
          return (
            <button
              key={o.id}
              onClick={() => { onChange(o); onClose(); }}
              className={cn(
                "w-full rounded-xl border px-5 py-4 text-left flex items-center justify-between",
                active ? "border-[#ffc73c] bg-[#fff6e0]" : "border-black/10 bg-white hover:bg-black/5"
              )}
            >
              <div className="flex items-center gap-3">
                {ASSETS.plan && <Img src={ASSETS.plan} />}
                <div>
                  <div className="text-[15px] font-medium">{o.line1}</div>
                  <div className="text-sm text-black/60">{o.line2}</div>
                </div>
              </div>
              <div className="text-[18px] font-semibold tracking-tight">₹{o.price}/-</div>
            </button>
          );
        })}
      </div>
    </ModalShell>
  );
}

function ServiceModal({ open, onClose, value, onChange }) {
  if (!open) return null;
  return (
    <ModalShell title="Service you want" onClose={onClose} width="w-[520px]">
      <div className="space-y-3">
        {SERVICE_OPTIONS.map((s) => {
          const active = value?.id === s.id;
          return (
            <button
              key={s.id}
              onClick={() => { onChange(s); onClose(); }}
              className={cn(
                "w-full h-12 rounded-xl border px-5 text-sm font-medium flex items-center justify-between",
                active ? "border-[#ffc73c] bg-[#fff6e0]" : "border-black/10 bg-white hover:bg-black/5"
              )}
            >
              <span className="flex items-center gap-3">
                {ASSETS.service && <Img src={ASSETS.service} />}
                {s.label}
              </span>
              {active
                ? (ASSETS.check ? <Img src={ASSETS.check} /> : <Check className="w-4 h-4" />)
                : <span />}
            </button>
          );
        })}
      </div>
    </ModalShell>
  );
}

/* Calendar utils */
const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
const sameDay = (a, b) =>
  a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

function CalendarModal({ open, onClose, value, onChange }) {
  const [view, setView] = useState(() => startOfMonth(value || new Date()));
  if (!open) return null;

  const monthLabel = view.toLocaleString("default", { month: "long", year: "numeric" });
  const first = startOfMonth(view);
  const startIdx = (first.getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startIdx; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));

  return (
    <ModalShell title="" onClose={onClose} width="w-[340px]">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-black/5"
                  onClick={() => setView(addMonths(view, -1))}>
            {ASSETS.chevronLeft ? <Img src={ASSETS.chevronLeft} /> : <ChevronLeft className="w-4 h-4" />}
          </button>
          <div className="font-medium">{monthLabel}</div>
          <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-black/5"
                  onClick={() => setView(addMonths(view, +1))}>
            {ASSETS.chevronRight ? <Img src={ASSETS.chevronRight} /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-black/60">
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d)=>(
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((d,i)=>{
            const active = d && value && sameDay(d,value);
            return (
              <button
                key={i}
                disabled={!d}
                onClick={()=>{ onChange(d); onClose(); }}
                className={cn(
                  "h-9 rounded-md text-sm",
                  d ? "hover:bg-black/5" : "opacity-0",
                  active && "ring-2 ring-[#ffc73c] bg-[#fff6e0]"
                )}
              >
                {d?.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </ModalShell>
  );
}

function PincodeModal({ open, onClose, value, onChange }) {
  const [q, setQ] = useState("");
  if (!open) return null;

  const list = PINCODES.filter((c) => c.includes(q.trim()));

  return (
    <ModalShell title="Search your pincode (Delhi Only)" onClose={onClose} width="w-[560px]">
      <style>{`
        .pin-scroll::-webkit-scrollbar{ width:8px }
        .pin-scroll::-webkit-scrollbar-track{ background:transparent }
        .pin-scroll::-webkit-scrollbar-thumb{ background:#ffc73c;border-radius:9999px }
      `}</style>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">
          {ASSETS.search ? <Img src={ASSETS.search} /> : <Search className="w-4 h-4" />}
        </span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search your pincode"
          className="w-full h-10 pl-9 pr-3 rounded-lg border border-black/10 focus:ring-2 focus:ring-[#592eff]/25 focus:outline-none"
        />
      </div>
      <div className="mt-3 max-h-56 overflow-y-auto pin-scroll grid grid-cols-3 gap-3 pr-1">
        {list.map((c) => {
          const active = value === c;
          return (
            <button
              key={c}
              onClick={() => { onChange(c); onClose(); }}
              className={cn(
                "h-10 rounded-lg border text-sm",
                active ? "bg-[#fff3cf] border-[#ffc73c]" : "bg-white border-black/10 hover:bg-black/5"
              )}
            >
              {c}
            </button>
          );
        })}
      </div>
    </ModalShell>
  );
}

/* ===== Child: BookingFormCard ===== */
export default function BookingFormCard() {
  const [planOpen, setPlanOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);

  // Controlled form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city] = useState(""); // optional for now

  const [plan, setPlan] = useState(null);
  const [service, setService] = useState(null);
  const [slotDate, setSlotDate] = useState(null);
  const [pincode, setPincode] = useState("");
  const [bookingId, setBookingId] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  // live error states (typed validation)
  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const showService = Boolean(plan);

  // ---------- helpers ----------
  const planPrice = plan ? PLAN_OPTIONS.find(p=>p.id===plan.id)?.price ?? 0 : 0;

  const payloadBase = () => ({
    bookingId,
    name, phone, email,
    planId: plan?.id || null,
    planLabel: plan?.line2 || null,
    service: service?.id || null,
    address, city, pincode,
    slotDate: slotDate ? new Date(slotDate).toISOString() : null,
  });

  async function saveStep(tag){
    try{
      const body = payloadBase();
      log("saveStep", tag, body);
      const data = await postJSON(ENDPOINT.save, body);
      if (data?.bookingId && !bookingId){
        setBookingId(data.bookingId);
        log("🆔 created bookingId", data.bookingId);
      }
    }catch(e){ err("saveStep failed", e); }
  }

  // Auto-save on key milestones
  useEffect(()=>{ if (plan) saveStep("plan"); }, [plan?.id]);
  useEffect(()=>{ if (service) saveStep("service"); }, [service?.id]);
  useEffect(()=>{ if (slotDate) saveStep("slot"); }, [slotDate]);
  useEffect(()=>{ if (pincode) saveStep("pincode"); }, [pincode]);

  // ====== LIVE VALIDATION HANDLERS ======
  // .com-only (case-insensitive)
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/i;

  function handleNameChange(e){
    const v = e.target.value;
    setName(v);
    if (!v) { setNameErr(""); return; }
    if (/[^a-zA-Z\s.'-]/.test(v)) setNameErr("Only alphabets, spaces, .' - are allowed");
    else if (v.trim().length > 0 && v.trim().length < 2) setNameErr("Please enter your full name");
    else setNameErr("");
  }
  function handleNameBlur(){
    if (!name || name.trim().length < 2) setNameErr("Please enter your full name");
  }

  function handlePhoneChange(e){
    const v = e.target.value;
    setPhone(v);
    if (!v) { setPhoneErr(""); return; }
    if (/[^0-9]/.test(v)) setPhoneErr("Digits only (0-9)");
    else if (v.replace(/\D/g, "").length > 10) setPhoneErr("Max 10 digits");
    else setPhoneErr("");
  }
  function handlePhoneBlur(){
    const len = (phone || "").replace(/\D/g, "").length;
    if (len !== 10) setPhoneErr("Phone must be 10 digits");
  }

  function handleEmailChange(e){
    const v = e.target.value.trim();
    setEmail(v);
    if (!v) { setEmailErr(""); return; }
    if (!emailRegex.test(v)) setEmailErr("Email must be a valid .com address");
    else setEmailErr("");
  }
  function handleEmailBlur(){
    const v = (email || "").trim();
    setEmail(v);
    if (!emailRegex.test(v)) setEmailErr("Email must be a valid .com address");
  }

  // Reset form after successful payment verification
  function resetForm(){
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setPlan(null);
    setService(null);
    setSlotDate(null);
    setPincode("");
    setBookingId(null);

    setPlanOpen(false);
    setServiceOpen(false);
    setCalOpen(false);
    setPinOpen(false);

    setNameErr("");
    setPhoneErr("");
    setEmailErr("");

    document.getElementById("booking-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- submit ----------
  function validate(){
    if (!name || name.trim().length < 2) { setNameErr("Please enter your full name"); return "Please enter your full name"; }
    if (/[^a-zA-Z\s.'-]/.test(name||"")) { setNameErr("Only alphabets are allowed in name"); return "Only alphabets are allowed in name"; }

    const digits = (phone||"").replace(/\D/g, "");
    if (!digits) { setPhoneErr("Enter your phone number"); return "Enter your phone number"; }
    if (digits.length !== 10) { setPhoneErr("Phone must be 10 digits"); return "Phone must be 10 digits"; }

    if (!emailRegex.test(email||"")) { setEmailErr("Email must be a valid .com address"); return "Email must be a valid .com address"; }
    if (!plan) return "Please select a plan";
    if (!service) return "Please choose a service";
    if (!slotDate) return "Please choose your slot date";
    if (!pincode) return "Please select your pincode";
    if (!address || address.length < 4) return "Please enter your address";
    return null;
  }

  async function handleSubmit(e){
    e.preventDefault();
    const v = validate();
    if (v){ warn("validation", v); toast.error(v); return; }

    try{
      setSubmitting(true);
      const body = { ...payloadBase(), price: planPrice };
      log("createBooking →", body);
      const data = await postJSON(ENDPOINT.create, body);
      log("createBooking ←", data);

      setBookingId(data.bookingId);

      await ensureRazorpay();
      const rzp = new window.Razorpay({
        key: data.razorpayKey,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "Finsbee",
        description: `Consultation (${plan?.line2 || plan?.id})`,
        prefill: { name, email, contact: phone },
        handler: async (resp) => {
          log("rzp.handler", resp);
          try{
            const verify = await postJSON(ENDPOINT.confirm, {
              bookingId: data.bookingId,
              razorpay_order_id: resp.razorpay_order_id,
              razorpay_payment_id: resp.razorpay_payment_id,
              razorpay_signature: resp.razorpay_signature,
            });
            log("payment verified", verify);
            toast.success("Payment successful! Your booking is confirmed.");
            resetForm(); // ✅ reset everything on success
          }catch(e){
            err("verify failed", e);
            toast.error("Payment verification failed on server. Please contact support.");
          }
        },
        modal: { ondismiss(){ warn("Razorpay closed by user"); } },
        notes: { booking_id: String(data.bookingId), plan: plan?.id || "" },
        theme: { color: "#592eff" },
      });
      rzp.open();
    }catch(e){
      err("submit failed", e);
      toast.error(e.message || "Failed to start payment");
    }finally{
      setSubmitting(false);
    }
  }

  /* ================== RENDER ================== */
  return (
    <div
      className={cn(
        "relative",
        "rounded-2xl bg-white/95 backdrop-blur-xl",
        "ring-1 ring-[#592eff]/25 shadow-[0_20px_50px_rgba(0,0,0,0.2)]",
        "outline outline-1 outline-white/70",
        "p-5 sm:p-6",
        "min-h-[594px] lg:h-[594px]"
      )}
    >
      {/* Toast container */}
      <Toaster position="top-right" />

      <div
        id="booking-heading"
        className="text-black font-semibold text-lg mb-4 scroll-mt-24"
      >
        Booking your slot now
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <BaseInput
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            leftImg={ASSETS.user}
            leftIcon={<UserRound className="w-4 h-4" />}
            placeholder="enter your full name"
            className={cn(nameErr && "border-red-500 focus:border-red-500 focus:ring-red-200")}
            aria-invalid={!!nameErr}
          />
          {nameErr && <p className="mt-1 text-xs text-red-600">{nameErr}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <BaseInput
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              leftImg={ASSETS.phone}
              leftIcon={<Phone className="w-4 h-4" />}
              placeholder="enter your phone no."
              inputMode="tel"
              className={cn(phoneErr && "border-red-500 focus:border-red-500 focus:ring-red-200")}
              aria-invalid={!!phoneErr}
            />
            {phoneErr && <p className="mt-1 text-xs text-red-600">{phoneErr}</p>}
          </div>

          <div>
            <BaseInput
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              leftImg={ASSETS.mail}
              leftIcon={<Mail className="w-4 h-4" />}
              type="email"
              placeholder="enter your email id"
              className={cn(emailErr && "border-red-500 focus:border-red-500 focus:ring-red-200")}
              aria-invalid={!!emailErr}
            />
            {emailErr && <p className="mt-1 text-xs text-red-600">{emailErr}</p>}
          </div>
        </div>

        {/* Plan + (conditionally visible) Service */}
        <div className={cn("grid gap-4", plan ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1") }>
          <ClickField
            leftImg={ASSETS.plan}
            leftIcon={<Map className="w-4 h-4" />}
            value={plan ? `${plan.line2}` : ""}
            placeholder="Select your plan"
            onClick={() => setPlanOpen(true)}
            rightImg={ASSETS.chevronDown}
            rightIcon={<ChevronDown className="w-4 h-4" />}
          />

          {plan && (
            <ClickField
              leftImg={ASSETS.service}
              leftIcon={<Map className="w-4 h-4" />}
              value={service?.label}
              placeholder="Service you want"
              onClick={() => setServiceOpen(true)}
              rightImg={ASSETS.chevronDown}
              rightIcon={<ChevronDown className="w-4 h-4" />}
            />
          )}
        </div>

        {/* Slot date */}
        <ClickField
          leftImg={ASSETS.calendar}
          leftIcon={<CalIcon className="w-4 h-4" />}
          value={slotDate ? new Date(slotDate).toDateString() : ""}
          placeholder="Choose your slot"
          onClick={() => setCalOpen(true)}
          rightImg={ASSETS.calendar}
          rightIcon={<CalIcon className="w-4 h-4" />}
        />

        {/* Pincode + Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ClickField
            leftImg={ASSETS.pincode}
            leftIcon={<MapPin className="w-4 h-4" />}
            value={pincode}
            placeholder="enter your pincode"
            onClick={() => setPinOpen(true)}
            rightImg={ASSETS.chevronDown}
            rightIcon={<ChevronDown className="w-4 h-4" />}
          />
          <BaseInput
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            placeholder="enter your address"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "mt-2 w-full h-12 rounded-lg text-black font-semibold transition",
            submitting ? "bg-[#d6b34e] opacity-80 cursor-not-allowed" : "bg-[#ffc73c] hover:brightness-105 active:scale-[0.99]"
          )}
        >
          {submitting ? "Starting payment…" : `Proceed to Payment${planPrice?` · ₹${planPrice}`:""}`}
        </button>
      </form>

      {/* CENTERED MODALS */}
      <PlanModal
        open={planOpen}
        onClose={() => setPlanOpen(false)}
        value={plan}
        onChange={(p) => {
          setPlan(p);
          setService(null);
          if (p) setServiceOpen(true);
        }}
      />
      <ServiceModal
        open={serviceOpen}
        onClose={() => setServiceOpen(false)}
        value={service}
        onChange={setService}
      />
      <CalendarModal
        open={calOpen}
        onClose={() => setCalOpen(false)}
        value={slotDate}
        onChange={(d)=>{ setSlotDate(d); }}
      />
      <PincodeModal
        open={pinOpen}
        onClose={() => setPinOpen(false)}
        value={pincode}
        onChange={setPincode}
      />
    </div>
  );
}
