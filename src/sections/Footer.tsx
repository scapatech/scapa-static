import { useState, useEffect, useRef } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Search } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer ref={sectionRef} className="bg-white pt-12 pb-6">
      <div className="container-scapa section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Search Column */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-scapa-blue mb-4 flex items-center gap-2">
              Search <Search size={18} />
            </h4>
            <div className="relative">
              <input
                type="text"
                placeholder="TYPE AND HIT ENTER..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-scapa-blue transition-colors"
              />
            </div>
          </div>

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

          {/* About Us Column */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-scapa-blue mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onPageChange('home')}
                  className="text-scapa-red text-sm hover:underline transition-all"
                >
                  Scapa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('home')}
                  className="text-scapa-red text-sm hover:underline transition-all"
                >
                  Our History
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('solutions')}
                  className="text-scapa-red text-sm hover:underline transition-all"
                >
                  EMS
                </button>
              </li>
            </ul>
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

        {/* Social & Partners */}
        <div 
          className={`flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-gray-200 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center bg-[#3b5998] text-white rounded-sm hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] text-white rounded-sm hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center bg-[#0077b5] text-white rounded-sm hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center bg-[#ff0000] text-white rounded-sm hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-400">Partners:</span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-500">VMware</span>
              <span className="text-sm font-semibold text-gray-500">BMC</span>
              <span className="text-sm font-semibold text-gray-500">Citrix</span>
              <span className="text-sm font-semibold text-gray-500">Microsoft</span>
            </div>
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
