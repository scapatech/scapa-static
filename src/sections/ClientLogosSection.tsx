import { useEffect, useRef, useState } from 'react';

export default function ClientLogosSection() {
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

  // Client logos as SVG components for clean rendering
  const clients = [
    {
      name: 'Swiss Re',
      svg: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <circle cx="15" cy="20" r="12" fill="none" stroke="#666" strokeWidth="2"/>
          <text x="32" y="25" fill="#666" fontSize="14" fontWeight="600">Swiss Re</text>
        </svg>
      ),
    },
    {
      name: 'Cisco',
      svg: (
        <svg viewBox="0 0 80 40" className="h-8 w-auto">
          <text x="5" y="28" fill="#049fd9" fontSize="20" fontWeight="700">cisco</text>
        </svg>
      ),
    },
    {
      name: 'BT',
      svg: (
        <svg viewBox="0 0 60 40" className="h-8 w-auto">
          <circle cx="20" cy="20" r="15" fill="#6400aa"/>
          <text x="12" y="25" fill="white" fontSize="14" fontWeight="700">BT</text>
        </svg>
      ),
    },
    {
      name: 'Comcast',
      svg: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <text x="5" y="28" fill="#000" fontSize="16" fontWeight="600">COMCAST</text>
        </svg>
      ),
    },
    {
      name: 'Cerner',
      svg: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <text x="5" y="28" fill="#00b2e3" fontSize="18" fontWeight="600">Cerner</text>
        </svg>
      ),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 bg-white"
    >
      <div className="container-scapa section-padding">
        <div 
          className={`flex flex-wrap items-center justify-center md:justify-between gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`transition-all duration-500 hover:scale-110 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                transitionDelay: `${100 + index * 80}ms`,
                transitionTimingFunction: 'var(--ease-spring)',
                filter: 'grayscale(100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
              }}
            >
              {client.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
