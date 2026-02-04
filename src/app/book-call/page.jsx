import CalendlyInline from "@/components/CalendlyInline";


export default function BookCallPage() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Book a Meeting</h1>
      <CalendlyInline/>
    </div>
  );
}
