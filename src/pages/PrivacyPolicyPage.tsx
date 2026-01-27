import { useEffect, useRef, useState } from 'react';

export default function PrivacyPolicyPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="py-12 md:py-16" style={{ backgroundColor: 'var(--scapa-blue)' }}>
        <div className="container-scapa section-padding">
          <h1
            className={`text-white text-3xl md:text-4xl font-light transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-scapa section-padding py-12 md:py-16">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <div className="prose prose-gray max-w-none">
            <h2 className="text-scapa-blue text-2xl mb-4">Introduction</h2>
            <p className="mb-6 text-gray-600">
              Scapa Technologies Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.scapatech.com.
            </p>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Information We Collect</h2>
            <p className="mb-4 text-gray-600">We may collect information about you in various ways, including:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Data you provide directly to us (e.g., contact forms, email communications)</li>
              <li>Automatically collected data (e.g., IP address, browser type, device information)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">How We Use Your Information</h2>
            <p className="mb-4 text-gray-600">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Data Protection</h2>
            <p className="mb-6 text-gray-600">
              We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Your Rights</h2>
            <p className="mb-4 text-gray-600">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: info@scapatech.com<br />
              Address: 2/3 48 West George St., Glasgow, G2 1BP, Scotland
            </p>

            <p className="mt-8 text-sm text-gray-500">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
