import { useState, useEffect, useRef } from 'react';

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    platform: '',
    hearAbout: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://automate.billgleeson.com/webhook/321f09d3-bac2-4ee7-8179-2a916a0a6ee8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact-page',
          ...formData,
          submittedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        alert('Thank you for your enquiry. We will get back to you soon.');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          platform: '',
          hearAbout: '',
          message: '',
        });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-scapa section-padding py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h3 className="text-scapa-blue mb-6 text-2xl">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
                <input
                  type="text"
                  name="contactName"
                  placeholder="Contact Name *"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Contact Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="platform"
                  placeholder="What platform are you looking to test? *"
                  value={formData.platform}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
                <input
                  type="text"
                  name="hearAbout"
                  placeholder="How did you hear about Scapa? *"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full btn-primary py-4"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
