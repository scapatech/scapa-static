import { useEffect, useRef, useState } from 'react';

interface ProductsSectionProps {
  onPageChange: (page: string) => void;
}

export default function ProductsSection({ onPageChange }: ProductsSectionProps) {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-900"
    >
      <div className="container-scapa section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h2 
              className="text-white text-2xl md:text-3xl font-light mb-6"
              style={{ textShadow: '0 0 20px rgba(0,119,179,0.3)' }}
            >
              Scapa Test and Performance Platform Products
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Innovative and powerful benchmarking, performance testing, diagnosis and monitoring software
            </p>
            <button
              onClick={() => onPageChange('solutions')}
              className="btn-secondary"
            >
              VIEW OUR PRODUCTS
            </button>
          </div>

          {/* Right Image */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 -rotate-3'
            }`}
            style={{ 
              transitionDelay: '200ms',
              transitionTimingFunction: 'var(--ease-expo-out)',
              perspective: '1000px',
            }}
          >
            <div 
              className="relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{
                transform: isVisible ? 'rotateY(0deg)' : 'rotateY(-15deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <img 
                src="/images/products-mockup.jpg" 
                alt="Scapa Test and Performance Platform"
                className="w-full h-auto"
              />
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(0,119,179,0.2)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
