import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      quote: "...we looked very closely at all the market players and, quite simply, Scapa emerged as the only solution that would deliver the level of detail we wanted regarding the end-user experience.",
      author: "Declan Kane",
      title: "VP of Information Technology, Swiss Re",
    },
    {
      quote: "Time is a precious commodity in this type of project and testing is often seen as non-essential, time-consuming and costly...we've seen how Scapa TPP can save time, effort/resource and, ultimately, costs by making the end-to-end system performance visible – even in complex, multi-layered IT environments – allowing no hiding place for issues.",
      author: "Charley Whitt",
      title: "Manager of Support Services, Rapid Technologies",
    },
    {
      quote: "Scapa TPP was also the only test tool in the market that allowed us to measure user experience on the simulated Thin Client.",
      author: "Cisco Systems Inc.",
      title: "System Test Group",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/testimonials-bg.jpg)' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative container-scapa section-padding">
        <h2 
          className={`text-white text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionTimingFunction: 'var(--ease-expo-out)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Read some Testimonials...
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-scapa-blue/90 backdrop-blur-sm p-6 rounded-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 150}ms`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <Quote 
                size={24} 
                className="text-white/50 mb-4"
                style={{ animation: isVisible ? 'pulse 4s ease-in-out infinite' : 'none' }}
              />
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                <p className="text-white/70 text-xs">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
