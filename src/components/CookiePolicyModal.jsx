"use client";

export default function CookiePolicyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[10000] bg-white overflow-y-auto">
      
      {/* HEADER */}
      <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-semibold">Cookies Policy</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-black text-lg font-medium"
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8 text-gray-700 leading-relaxed">

        <h1 className="text-3xl font-bold">
          Cookies Policy for Finsbee
        </h1>

        <p>
          <strong>Last updated:</strong> 7 February 2026 <br />
          <strong>Effective from:</strong> 7 February 2026
        </p>

        <section className="space-y-8 text-gray-700 leading-relaxed">

        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            This Cookies Policy explains how Finsbee (“we”, “us”, “our”) uses
            cookies and similar tracking technologies on our website
            www.Finsbee.com and related services. By using our website, you
            consent to the use of cookies in accordance with this policy and our
            Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help remember preferences, improve performance, and
            analyse usage.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            3. Types of cookies we use
          </h2>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Strictly necessary cookies:</strong> Required for core
              website functionality like login and forms.
            </li>
            <li>
              <strong>Functional / preference cookies:</strong> Remember user
              preferences such as language or filters.
            </li>
            <li>
              <strong>Analytics / performance cookies:</strong> Help analyse
              usage and improve performance.
            </li>
            <li>
              <strong>Targeting / advertising cookies:</strong> Used by
              partners like Meta and Google Ads.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            4. How we use cookies
          </h2>
          <p>
            We use cookies to enable website functionality, remember settings,
            analyse behaviour, and measure advertising performance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            5. Third-party cookies
          </h2>
          <p>
            Some cookies are placed by analytics providers, advertising
            platforms, and embedded services. These operate under their own
            privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            6. Consent and your rights
          </h2>
          <p>
            We obtain explicit opt-in consent before placing non-essential
            cookies. You can accept, reject, or withdraw consent at any time via
            the cookie banner or browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            7. How to manage cookies
          </h2>
          <p>
            You can manage cookies via browser settings including blocking,
            deleting, or receiving notifications when cookies are set.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            8. Data retention and security
          </h2>
          <p>
            Cookies may expire after a session or remain for months. We
            implement reasonable safeguards to protect collected data.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            9. Updates to this policy
          </h2>
          <p>
            We may update this policy from time to time. Significant changes
            will be communicated via website banner or notification.
          </p>
        </div>

      </section>

        {/* Add rest content same way */}

      </div>
    </div>
  );
}