import { useEffect, useRef, useState } from 'react';

interface CaseStudiesCTAProps {
  onPageChange: (page: string) => void;
}

export default function CaseStudiesCTA({ onPageChange }: CaseStudiesCTAProps) {
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
      style={{ backgroundColor: 'var(--scapa-light-blue)' }}
    >
      <div className="container-scapa section-padding">
        <div 
          className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <h3 className="text-scapa-blue text-xl md:text-2xl font-light text-center md:text-left">
            Find out how we are different by reading some of our Case Studies
          </h3>
          <button
            onClick={() => onPageChange('success')}
            className={`btn-secondary whitespace-nowrap transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ 
              transitionDelay: '300ms',
              transitionTimingFunction: 'var(--ease-elastic)',
            }}
          >
            CLICK HERE
          </button>
        </div>
      </div>
    </section>
  );
}
