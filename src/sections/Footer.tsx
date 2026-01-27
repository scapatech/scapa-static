import { useState, useEffect, useRef } from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://automate.billgleeson.com/webhook/321f09d3-bac2-4ee7-8179-2a916a0a6ee8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'footer',
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
    <footer ref={sectionRef} className="bg-white pt-12 pb-6">
      <div className="container-scapa section-padding">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Column */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-scapa-blue mb-4">Contact Information</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>2/3 48 West George St.</p>
              <p>Glasgow, G2 1BP,</p>
              <p>Scotland</p>
              <p className="pt-2">Telephone: (+44)1413195161</p>
              <p>Email: info@scapatech.com</p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-scapa-blue mb-4">Get In Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
                <input
                  type="text"
                  name="contactName"
                  placeholder="Contact Name *"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Contact Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="platform"
                  placeholder="What platform are you looking to test? *"
                  value={formData.platform}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
                <input
                  type="text"
                  name="hearAbout"
                  placeholder="How did you hear about Scapa? *"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full btn-primary"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Partners */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-gray-200 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
        >
          <span className="text-xs text-gray-400">Partners:</span>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-gray-500">VMware</span>
            <span className="text-sm font-semibold text-gray-500">BMC</span>
            <span className="text-sm font-semibold text-gray-500">Citrix</span>
            <span className="text-sm font-semibold text-gray-500">Microsoft</span>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className={`mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-500 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href="#" className="hover:text-scapa-blue transition-colors">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-scapa-blue transition-colors">Cookie Policy</a>
          <span className="mx-2">|</span>
          <span>© 2024 – All Rights Reserved. Scapa Technologies Limited is registered in Scotland number SC187089.</span>
        </div>
      </div>
    </footer>
  );
}
