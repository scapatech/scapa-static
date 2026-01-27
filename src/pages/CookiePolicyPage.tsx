import { useEffect, useRef } from 'react';

export default function CookiePolicyPage() {
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
            Cookie Policy
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
            <h2 className="text-scapa-blue text-2xl mb-4">What Are Cookies</h2>
            <p className="mb-6 text-gray-600">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">How We Use Cookies</h2>
            <p className="mb-4 text-gray-600">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
            </ul>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Third-Party Cookies</h2>
            <p className="mb-4 text-gray-600">We may use third-party services that set cookies, including:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Google Analytics:</strong> To analyze site traffic and user behavior</li>
              <li><strong>GitHub Pages:</strong> For hosting our website</li>
            </ul>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Managing Cookies</h2>
            <p className="mb-6 text-gray-600">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
            </p>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Your Cookie Choices</h2>
            <p className="mb-4 text-gray-600">Most web browsers allow you to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Updates to This Policy</h2>
            <p className="mb-6 text-gray-600">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-scapa-blue text-2xl mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at:
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
