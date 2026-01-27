import { useEffect, useRef, useState } from 'react';

interface RequestCallSectionProps {
  onPageChange: (page: string) => void;
}

export default function RequestCallSection({ onPageChange }: RequestCallSectionProps) {
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
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
        style={{ 
          backgroundImage: 'url(/images/cta-background.jpg)',
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
        }}
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"
      />
      
      {/* Content */}
      <div className="relative container-scapa section-padding text-center">
        <h2 
          className={`text-white text-3xl md:text-4xl font-light mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: '200ms',
            transitionTimingFunction: 'var(--ease-expo-out)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Request A Call
        </h2>
        
        <p 
          className={`text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ 
            transitionDelay: '400ms',
            transitionTimingFunction: 'var(--ease-smooth)',
            textShadow: '0 1px 5px rgba(0,0,0,0.3)',
          }}
        >
          Scapa will host a discussion with you and your colleagues, we'll talk through issues 
          you may be facing and discuss the mix of tools and process that we believe will best address them
        </p>
        
        <button
          onClick={() => onPageChange('contact')}
          className={`btn-primary transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ 
            transitionDelay: '600ms',
            transitionTimingFunction: 'var(--ease-elastic)',
          }}
        >
          CLICK HERE
        </button>
      </div>
    </section>
  );
}
