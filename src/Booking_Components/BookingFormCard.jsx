"use client";
import React, { useEffect, useState } from "react";
import {
  UserRound, Phone, Mail, Calendar, MapPin, Map, ChevronDown,
  X, Check, Search, ChevronLeft, ChevronRight
} from "lucide-react";

/* ================== UNIQUE BOOKING ID ================== */
function generateBookingId() {
  const now = new Date();
  const datePart = now.toISOString().split("T")[0].replace(/-/g, "");
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
  return `BK-${datePart}-${random}`; // e.g., BK-20251108-7492
}

/* ================== DEBUG UTILS ================== */
const DEBUG =
  typeof window !== "undefined" &&
  (window.__BOOKING_DEBUG__ ?? process.env.NODE_ENV !== "production");
const log = (...a) =>
  DEBUG && console.log("%c[BookingForm]", "color:#592eff;font-weight:600", ...a);
const warn = (...a) => DEBUG && console.warn("[BookingForm]", ...a);
const err = (...a) => DEBUG && console.error("[BookingForm]", ...a);

/* ================== API ENDPOINTS (Proxy Ready) ================== */
const ENDPOINT = {
  save: "/api/booking/save-step",           // → https://booking.finsbee.com
  create: "/api/booking/create",             // → https://booking.finsbee.com
  confirm: "/api/booking/confirm",           // → https://booking.finsbee.com
  dashboardCreate: "/api/dashboard/create",  // → https://dashboard.finsbee.com
};

/* ================== API HELPERS ================== */
async function postJSON(url, body) {
  if (process.env.NODE_ENV !== "production") log("API Request:", url, body);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
    if (process.env.NODE_ENV !== "production") log("API Response:", url, data);
  } catch {
    const errorMessage = `HTTP ${res.status} ${res.statusText}`;
    err("API Parse Error:", errorMessage);
    throw new Error(errorMessage);
  }

  if (!res.ok || data?.success === false) {
    throw new Error(data?.message || `Request failed with status ${res.status}`);
  }
  return data;
}

/* FIXED: Send INTEGER IDs to Odoo */
async function postToDashboard(payload) {
  if (!payload.planOdooId || !payload.serviceOdooId) {
    throw new Error("Plan or Service not selected");
  }

  const uniqueId = generateBookingId();
  const body = {
    jsonrpc: "2.0",
    method: "call",
    id: Date.now(),
    params: {
      bookingId: uniqueId,
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      planId: payload.planOdooId,    
      planLabel: payload.planLabel,
      service: payload.serviceOdooId, 
      address: payload.address,
      city: payload.city || "Delhi",
      pincode: payload.pincode,
      slotDate: payload.slotDate,
      price: payload.price,
      source_id: "Website 60 min Booking Form",
    },
  };

  log("Dashboard API →", body);

  const res = await fetch(ENDPOINT.dashboardCreate, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok || data.error) {
    const msg = data.error?.data?.message || "Dashboard API failed";
    warn("Dashboard API Error:", msg);
    throw new Error(msg);
  }

  toast.success("Synced to dashboard!");
  return { ...data, generatedBookingId: uniqueId };
}

/* Razorpay Loader */
async function ensureRazorpay() {
  if (window.Razorpay) return true;
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => reject(new Error("Razorpay script failed to load"));
    document.head.appendChild(s);
  });
}

/* ================== TOAST SYSTEM ================== */
function useToastStack() {
  const [toasts, setToasts] = useState([]);
  function push(type, message) {
    const id = Date.now() + Math.random();
    setToasts(t => [...t, { id, type, message }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  }
  function remove(id) {
    setToasts(t => t.filter(x => x.id !== id));
  }
  return { toasts, push, remove };
}

function ToastStack({ toasts, onClose }) {
  return (
    <div className="fixed top-4 right-4 z-100 space-y-2">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`min-w-[240px] max-w-[320px] px-4 py-3 rounded-lg shadow-lg ring-1 text-sm flex items-start gap-3 animate-[fadeIn_.2s_ease] ${
            t.type === "error"
              ? "bg-red-600 text-white ring-red-700"
              : "bg-emerald-600 text-white ring-emerald-700"
          }`}
        >
          <span className="mt-0.5 font-medium">
            {t.type === "error" ? "Error" : "Success"}
          </span>
          <span className="opacity-90">{t.message}</span>
          <button
            onClick={() => onClose(t.id)}
            className="ml-auto opacity-80 hover:opacity-100"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      ))}
      <style>{`@keyframes fadeIn{from{opacity:.5;transform:translateY(-4px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

/* ================== ICONS & UI ================== */
const ASSETS = {
  user: <UserRound className="w-4 h-4" />,
  phone: <Phone className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
  plan: <Map className="w-4 h-4" />,
  service: <Map className="w-4 h-4" />,
  calendar: <Calendar className="w-4 h-4" />,
  pincode: <MapPin className="w-4 h-4" />,
  address: <MapPin className="w-4 h-4" />,
  chevronDown: <ChevronDown className="w-4 h-4" />,
  close: <X className="w-4 h-4" />,
  check: <Check className="w-4 h-4" />,
  search: <Search className="w-4 h-4" />,
  chevronLeft: <ChevronLeft className="w-4 h-4" />,
  chevronRight: <ChevronRight className="w-4 h-4" />,
};

const cn = (...a) => a.filter(Boolean).join(" ");
const Img = ({ src, className = "" }) => (
  <span className={cn("w-4 h-4 object-contain inline-block", className)}>{src}</span>
);

/* ================== INPUT COMPONENTS ================== */
const BaseInput = ({ className = "", leftImg, ...props }) => (
  <div className="relative">
    {leftImg && (
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">
        <Img src={leftImg} />
      </span>
    )}
    <input
      {...props}
      className={cn(
        "w-full h-14 rounded-lg bg-white/90 placeholder-black/40 border border-black/10 focus:border-[#592eff]/40 focus:outline-none focus:ring-2 focus:ring-[#592eff]/25 pr-3 text-sm text-black",
        leftImg ? "pl-10" : "pl-3",
        className
      )}
    />
  </div>
);

const ClickField = React.forwardRef(function ClickField(
  { leftImg, rightImg, value, placeholder, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className="w-full h-14 rounded-lg text-left relative bg-white/90 border border-black/10 focus:border-[#592eff]/40 focus:outline-none focus:ring-2 focus:ring-[#592eff]/25 pl-10 pr-9 text-sm text-black"
    >
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">
        <Img src={leftImg} />
      </span>
      <span className={cn(!value && "text-black/40")}>{value || placeholder}</span>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40">
        <Img src={rightImg} />
      </span>
    </button>
  );
});

/* ================== DATA ================== */
const PLAN_OPTIONS = [
  { id: "quick", line1: "15 minutes · Google Meet", line2: "Quick Advice Call", price: 99, odooId: 1 },
  { id: "home", line1: "One-on-one at your location", line2: "Home-Visit Consultation", price: 399, odooId: 2 },
  { id: "premium", line1: "calls + follow-ups · Home visits", line2: "Premium Monthly Support", price: 599, odooId: 3 },
];
const SERVICE_OPTIONS = [
  { id: "insurance", label: "INSURANCE", odooId: 1 },
  { id: "loan", label: "LOAN", odooId: 2 },
  { id: "invest", label: "INVESTMENT", odooId: 3 },
];
const PINCODES = Array.from({ length: 92 }, (_, i) => `1100${String(i + 1).padStart(2, "0")}`);

/* ================== MODALS ================== */
function ModalShell({ title, onClose, width = "max-w-[520px]", children }) {
  return (
    <div className="absolute inset-0 z-50 grid place-items-center">
      <button aria-hidden onClick={onClose} className="absolute inset-0 rounded-2xl bg-black/10 backdrop-blur-[1px]" />
      <div className={cn("relative rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/10 max-w-[92vw] w-[calc(100%-1.25rem)] sm:w-[calc(100%-1.5rem)]", width)} role="dialog">
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="text-sm font-medium text-black/70">{title}</div>
          <button onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/5" aria-label="Close">
            <Img src={ASSETS.close} />
          </button>
        </div>
        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  );
}

function PlanModal({ open, onClose, value, onChange }) {
  if (!open) return null;
  return (
    <ModalShell title="Choose Your Plan" onClose={onClose} width="max-w-[560px]">
      <div className="space-y-3">
        <button onClick={() => { onChange(null); onClose(); }} className={cn("w-full rounded-xl border px-5 py-4 text-left flex items-center gap-3", !value ? "border-[#ffc73c] bg-[#fff6e0]" : "border-dashed border-black/10 hover:bg-black/5")}>
          <Img src={ASSETS.plan} className="opacity-50" />
          <span className="text-sm font-medium text-black/60">Select your plan</span>
        </button>
        {PLAN_OPTIONS.map(o => {
          const active = value?.id === o.id;
          return (
            <button key={o.id} onClick={() => { onChange(o); onClose(); }} className={cn("w-full rounded-xl border px-5 py-4 text-left flex items-center justify-between", active ? "border-[#ffc73c] bg-[#fff6e0]" : "border-black/10 bg-white hover:bg-black/5")}>
              <div className="flex items-center gap-3">
                <Img src={ASSETS.plan} />
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
    <ModalShell title="Service you want" onClose={onClose}>
      <div className="space-y-3">
        {SERVICE_OPTIONS.map(s => {
          const active = value?.id === s.id;
          return (
            <button key={s.id} onClick={() => { onChange(s); onClose(); }} className={cn("w-full h-12 rounded-xl border px-5 text-sm font-medium flex items-center justify-between", active ? "border-[#ffc73c] bg-[#fff6e0]" : "border-black/10 bg-white hover:bg-black/5")}>
              <span className="flex items-center gap-3">
                <Img src={ASSETS.service} />
                {s.label}
              </span>
              {active ? <Img src={ASSETS.check} /> : null}
            </button>
          );
        })}
      </div>
    </ModalShell>
  );
}

function CalendarModal({ open, onClose, value, onChange }) {
  const [view, setView] = useState(() => new Date());
  if (!open) return null;
  const monthLabel = view.toLocaleString("default", { month: "long", year: "numeric" });
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const startIdx = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startIdx; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));

  return (
    <ModalShell title="" onClose={onClose} width="max-w-[340px]">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-black/5" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}>
            <Img src={ASSETS.chevronLeft} />
          </button>
          <div className="font-medium">{monthLabel}</div>
          <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-black/5" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}>
            <Img src={ASSETS.chevronRight} />
          </button>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-black/60">
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d} className="py-1">{d}</div>)}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((d, i) => {
            const active = d && value && d.toDateString() === value.toDateString();
            return (
              <button key={i} disabled={!d} onClick={() => { onChange(d); onClose(); }} className={cn("h-9 rounded-md text-sm", d ? "hover:bg-black/5" : "opacity-0", active && "ring-2 ring-[#ffc73c] bg-[#fff6e0]")}>
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
  const list = PINCODES.filter(c => c.includes(q.trim()));
  return (
    <ModalShell title="Search your pincode (Delhi Only)" onClose={onClose} width="max-w-[560px]">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"><Img src={ASSETS.search} /></span>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search your pincode" className="w-full h-10 pl-9 pr-3 rounded-lg border border-black/10 focus:ring-2 focus:ring-[#592eff]/25 focus:outline-none" />
      </div>
      <div className="mt-3 max-h-56 overflow-y-auto grid grid-cols-3 gap-3 pr-1">
        {list.map(c => {
          const active = value === c;
          return (
            <button key={c} onClick={() => { onChange(c); onClose(); }} className={cn("h-10 rounded-lg border text-sm", active ? "bg-[#fff3cf] border-[#ffc73c]" : "bg-white border-black/10 hover:bg-black/5")}>
              {c}
            </button>
          );
        })}
      </div>
    </ModalShell>
  );
}

function PoliciesModal({ open, onClose }) {
  if (!open) return null;
  return (
    <ModalShell title="Policies" onClose={onClose} width="max-w-[640px]">
      <div className="max-h-[60vh] overflow-y-auto pr-1 space-y-5 text-sm text-black/80">
        <section><h4 className="font-semibold text-black">Rescheduling</h4><ul className="list-disc pl-5 mt-1 space-y-1"><li>Free if ≥ 12 hours before.</li><li>₹50 fee if &lt; 12 hours.</li></ul></section>
        <section><h4 className="font-semibold text-black">Cancellations/Refunds</h4><ul className="list-disc pl-5 mt-1 space-y-1"><li>100% if ≥ 24 hours.</li><li>50% if 12–24 hours.</li><li>No refund &lt; 12 hours (credit given).</li></ul></section>
      </div>
    </ModalShell>
  );
}

function NotesModal({ open, onClose }) {
  if (!open) return null;
  return (
    <ModalShell title="Important Notes" onClose={onClose} width="max-w-[640px]">
      <div className="max-h-[60vh] overflow-y-auto pr-1 text-sm text-black/80">
        <ul className="list-disc pl-5 space-y-2">
          <li>We provide guidance, not guarantees.</li>
          <li>Payments via secure gateway.</li>
        </ul>
      </div>
    </ModalShell>
  );
}

/* ================== MAIN COMPONENT ================== */
export default function BookingFormCard() {
  const [planOpen, setPlanOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [plan, setPlan] = useState(null);
  const [service, setService] = useState(null);
  const [slotDate, setSlotDate] = useState(null);
  const [pincode, setPincode] = useState("");
  const [bookingId, setBookingId] = useState(null);

  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const { toasts, push, remove } = useToastStack();
  const toast = { success: m => push("success", m), error: m => push("error", m) };

  const planPrice = plan?.price ?? 0;

 const payloadBase = () => ({
  bookingId,
  name: name.trim(),
  phone: phone.replace(/\D/g, ""),
  email: email.trim(),
  planId: plan?.id || null,           // string: "quick"
  planOdooId: plan?.odooId || null,   // integer: 1
  planLabel: plan?.line2 || null,
  serviceId: service?.id || null,     // string: "insurance"
  serviceOdooId: service?.odooId || null, // integer: 1
  address: address.trim(),
  city: "Delhi",
  pincode,
  slotDate: slotDate ? new Date(slotDate).toISOString().split("T")[0] : null,
  source_id: "Website 60 min Booking Form",
});

  /* Save Step */
  async function saveStep() {
    if (!phone || !email) return;
    try {
      const body = payloadBase();
      const data = await postJSON(ENDPOINT.save, body);
      if (data?.bookingId && !bookingId) setBookingId(data.bookingId);
    } catch (e) { /* Silent */ }
  }

  useEffect(() => { if (plan && phone && email) saveStep(); }, [plan?.id, phone, email]);
  useEffect(() => { if (service && phone && email) saveStep(); }, [service?.id, phone, email]);
  useEffect(() => { if (slotDate && phone && email) saveStep(); }, [slotDate, phone, email]);
  useEffect(() => { if (pincode && phone && email) saveStep(); }, [pincode, phone, email]);

  /* Validation Handlers */
  function handleNameChange(e) {
    const v = e.target.value;
    setName(v);
    if (!v) { setNameErr(""); return; }
    if (/[^a-zA-Z\s.'-]/.test(v)) setNameErr("Only alphabets, spaces, .' - allowed");
    else if (v.trim().length < 2) setNameErr("Enter full name");
    else setNameErr("");
  }
  function handleNameBlur() {
    if (!name || name.trim().length < 2) setNameErr("Enter full name");
  }

  function handlePhoneChange(e) {
    const v = e.target.value;
    setPhone(v);
    if (!v) { setPhoneErr(""); return; }
    if (/[^0-9]/.test(v)) setPhoneErr("Digits only");
    else if (v.replace(/\D/g, "").length > 10) setPhoneErr("Max 10 digits");
    else setPhoneErr("");
  }
  function handlePhoneBlur() {
    if (phone.replace(/\D/g, "").length !== 10) setPhoneErr("Phone must be 10 digits");
  }

  function handleEmailChange(e) {
    const v = e.target.value.trim();
    setEmail(v);
    if (!v) { setEmailErr(""); return; }
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/i.test(v)) setEmailErr("Valid .com email required");
    else setEmailErr("");
  }
  function handleEmailBlur() {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/i.test(email)) setEmailErr("Valid .com email required");
  }

  /* Validation */
  function validate() {
    if (!name.trim() || name.trim().length < 2) return "Enter full name";
    if (/[^a-zA-Z\s.'-]/.test(name)) return "Invalid name";
    if (phone.replace(/\D/g, "").length !== 10) return "Phone must be 10 digits";
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/i.test(email)) return "Valid .com email required";
    if (!plan) return "Select a plan";
    if (!service) return "Choose a service";
    if (!slotDate) return "Pick a date";
    if (!pincode) return "Select pincode";
    if (address.trim().length < 4) return "Enter full address";
    if (!accepted) return "Accept Policies & Notes";
    return null;
  }

  /* Submit */
  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) { toast.error(v); return; }

    try {
      setSubmitting(true);
      const payload = { ...payloadBase(), price: planPrice };
      log("createBooking →", payload);

      const mainRes = await postJSON(ENDPOINT.create, payload);
      log("createBooking ←", mainRes);
      const mainBookingId = mainRes.bookingId || payload.bookingId;
      setBookingId(mainBookingId);

      try {
        const dashRes = await postToDashboard(payload);
        log("Dashboard API →", dashRes);
        toast.success("Synced to dashboard!");
      } catch (e) {
        warn("Dashboard sync failed", e);
      }

      await ensureRazorpay();
      const rzp = new window.Razorpay({
        key: mainRes.razorpayKey,
        amount: mainRes.amount,
        currency: mainRes.currency,
        order_id: mainRes.orderId,
        name: "Finsbee",
        description: `Consultation (${plan.line2})`,
        prefill: { name, email, contact: phone },
        handler: async (resp) => {
          try {
            await postJSON(ENDPOINT.confirm, {
              bookingId: mainBookingId,
              razorpay_order_id: resp.razorpay_order_id,
              razorpay_payment_id: resp.razorpay_payment_id,
              razorpay_signature: resp.razorpay_signature,
            });
            toast.success("Payment successful! Booking confirmed.");
            resetForm();
          } catch (e) {
            toast.error("Payment failed. Contact support.");
          }
        },
        modal: { ondismiss: () => warn("Payment cancelled") },
        notes: { booking_id: mainBookingId },
        theme: { color: "#592eff" },
      });
      rzp.open();
    } catch (e) {
      err("submit failed", e);
      toast.error(e.message || "Failed to start payment");
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setName(""); setPhone(""); setEmail(""); setAddress("");
    setPlan(null); setService(null); setSlotDate(null); setPincode("");
    setBookingId(null); setAccepted(false);
    setNameErr(""); setPhoneErr(""); setEmailErr("");
  }

  return (
    <div className={cn("relative rounded-2xl bg-white/95 backdrop-blur-xl ring-1 ring-[#592eff]/25 shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-5 sm:p-6 min-h-[594px] lg:h-[594px]")}>
      <ToastStack toasts={toasts} onClose={remove} />
      <div id="booking-heading" className="text-black font-semibold text-lg mb-4">Booking your slot now</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <BaseInput value={name} onChange={handleNameChange} onBlur={handleNameBlur} leftImg={ASSETS.user} placeholder="enter your full name" className={cn(nameErr && "border-red-500 focus:border-red-500 focus:ring-red-200")} aria-invalid={!!nameErr} />
          {nameErr && <p className="mt-1 text-xs text-red-600">{nameErr}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <BaseInput value={phone} onChange={handlePhoneChange} onBlur={handlePhoneBlur} leftImg={ASSETS.phone} placeholder="enter your phone no." inputMode="tel" className={cn(phoneErr && "border-red-500 focus:border-red-500 focus:ring-red-200")} aria-invalid={!!phoneErr} />
            {phoneErr && <p className="mt-1 text-xs text-red-600">{phoneErr}</p>}
          </div>
          <div>
            <BaseInput value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} leftImg={ASSETS.mail} type="email" placeholder="enter your email id" className={cn(emailErr && "border-red-500 focus:border-red-500 focus:ring-red-200")} aria-invalid={!!emailErr} />
            {emailErr && <p className="mt-1 text-xs text-red-600">{emailErr}</p>}
          </div>
        </div>

        <div className={cn("grid gap-4", plan ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
          <ClickField leftImg={ASSETS.plan} value={plan?.line2 || ""} placeholder="Select your plan" onClick={() => setPlanOpen(true)} rightImg={ASSETS.chevronDown} />
          {plan && <ClickField leftImg={ASSETS.service} value={service?.label || ""} placeholder="Service you want" onClick={() => setServiceOpen(true)} rightImg={ASSETS.chevronDown} />}
        </div>

        <ClickField leftImg={ASSETS.calendar} value={slotDate ? new Date(slotDate).toDateString() : ""} placeholder="Choose your slot" onClick={() => setCalOpen(true)} rightImg={ASSETS.calendar} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ClickField leftImg={ASSETS.pincode} value={pincode} placeholder="enter your pincode" onClick={() => setPinOpen(true)} rightImg={ASSETS.chevronDown} />
          <BaseInput value={address} onChange={e => setAddress(e.target.value)} placeholder="enter your address" leftImg={ASSETS.address} />
        </div>

        <div className="mt-2 flex items-start gap-3">
          <button type="button" onClick={() => setAccepted(a => !a)} className={cn("h-5 w-5 rounded-md border grid place-items-center transition", accepted ? "bg-[#ffc73c] border-[#eabb37]" : "bg-white border-black/20 hover:bg-black/5")}>
            {accepted ? <Img src={ASSETS.check} className="w-3 h-3" /> : null}
          </button>
          <div className="text-xs sm:text-sm text-black/70">
            I have read and agree to the{" "}
            <button type="button" onClick={() => setShowPolicies(true)} className="text-[#592eff] underline font-medium">Policies</button>{" "}
            and{" "}
            <button type="button" onClick={() => setShowNotes(true)} className="text-[#592eff] underline font-medium">Important Notes</button>.
          </div>
        </div>

        <button type="submit" disabled={submitting || !accepted} className={cn("mt-2 w-full h-12 rounded-lg text-black font-semibold transition", (submitting || !accepted) ? "bg-[#d6b34e] opacity-80 cursor-not-allowed" : "bg-[#ffc73c] hover:brightness-105 active:scale-[0.99]")}>
          {submitting ? "Starting payment…" : `Proceed to Payment${planPrice ? ` · ₹${planPrice}` : ""}`}
        </button>
      </form>

      <PlanModal open={planOpen} onClose={() => setPlanOpen(false)} value={plan} onChange={p => { setPlan(p); setService(null); if (p) setServiceOpen(true); }} />
      <ServiceModal open={serviceOpen} onClose={() => setServiceOpen(false)} value={service} onChange={setService} />
      <CalendarModal open={calOpen} onClose={() => setCalOpen(false)} value={slotDate} onChange={d => setSlotDate(d)} />
      <PincodeModal open={pinOpen} onClose={() => setPinOpen(false)} value={pincode} onChange={setPincode} />
      <PoliciesModal open={showPolicies} onClose={() => setShowPolicies(false)} />
      <NotesModal open={showNotes} onClose={() => setShowNotes(false)} />
    </div>
  );
}