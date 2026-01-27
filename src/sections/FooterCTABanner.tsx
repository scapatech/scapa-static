import { useEffect, useRef, useState } from 'react';

interface FooterCTABannerProps {
  onPageChange: (page: string) => void;
}

export default function FooterCTABanner({ onPageChange }: FooterCTABannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16"
      style={{ backgroundColor: 'var(--scapa-blue)' }}
    >
      <div className="container-scapa section-padding text-center">
        <h2 
          className={`text-white text-xl md:text-2xl font-light mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionTimingFunction: 'var(--ease-expo-out)',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          Find out how Scapa TPP can help your business perform better.
        </h2>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ 
            transitionDelay: '200ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <button
            onClick={() => onPageChange('contact')}
            className="btn-primary"
          >
            REQUEST A DEMO
          </button>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-white text-scapa-blue px-6 py-3 text-sm font-semibold rounded-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
          >
            ENQUIRE TODAY
          </button>
        </div>
      </div>
    </section>
  );
}
