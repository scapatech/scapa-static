import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import scapaLogo from '/images/scapa-logo.png';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'success', label: 'Success' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'h-8' : 'h-10'
        }`}
        style={{ backgroundColor: 'var(--scapa-blue)' }}
      >
        <div className="container-scapa h-full flex items-center justify-between section-padding">
          <p 
            className={`text-white text-xs transition-all duration-300 hidden sm:block ${
              isScrolled ? 'opacity-0' : 'opacity-100'
            }`}
          >
            The end to end infrastructure and application delivery performance specialists
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary text-xs py-1.5 px-4"
            >
              REQUEST A DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md h-16' 
            : 'bg-white h-20'
        }`}
      >
        <div className="container-scapa h-full flex items-center justify-between section-padding">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={scapaLogo}
              alt="Scapa Technologies"
              className={`h-12 w-auto transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  currentPage === item.id 
                    ? 'text-scapa-blue' 
                    : 'text-gray-700 hover:text-scapa-blue'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-1/2 h-0.5 bg-scapa-blue transition-all duration-300 transform -translate-x-1/2 ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-scapa-blue transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                  currentPage === item.id 
                    ? 'text-scapa-blue bg-scapa-light-blue' 
                    : 'text-gray-700 hover:text-scapa-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
