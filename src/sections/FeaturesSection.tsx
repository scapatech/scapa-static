import { useEffect, useRef, useState } from 'react';
import { Gauge, Monitor, ThumbsUp } from 'lucide-react';

export default function FeaturesSection() {
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

  const features = [
    {
      icon: Gauge,
      title: 'Speed/Time to Results',
      description: 'Scapa TPP tests can be repeated quickly and easily, allowing you to make the right decisions for your business requirements.',
      align: 'left',
    },
    {
      icon: Monitor,
      title: 'Unique Software Design and Testing Methodology',
      description: 'Our software replicates IT system users\' actions, by recording user activity with your own application mix, and replaying this at load, allowing their experience to be measured end-to-end. Taking measurements from both the end user perspective and each layer of the system architecture, and using our unique testing methodology, we determine user capacity, identify bottlenecks and other capacity, tuning, security or reliability issues.',
      align: 'right',
    },
    {
      icon: ThumbsUp,
      title: '20+ Years Expertise',
      description: 'With 20+ years of experience, our consultants have an extremely high level of expertise and understanding of testing, cybersecurity and ensuring IT system performance.',
      align: 'left',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container-scapa section-padding">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <h2 className="text-gray-800">
            Change is inevitable, Scapa makes it manageable
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                feature.align === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon */}
              <div 
                className={`flex ${feature.align === 'right' ? 'md:order-2 md:justify-start' : 'md:justify-end'}`}
              >
                <div 
                  className={`w-24 h-24 rounded-full bg-scapa-red/10 flex items-center justify-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 200}ms`,
                    transitionTimingFunction: 'var(--ease-spring)',
                    animation: isVisible ? 'float 6s ease-in-out infinite' : 'none',
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <feature.icon size={40} className="text-scapa-red" />
                </div>
              </div>

              {/* Content */}
              <div 
                className={`${feature.align === 'right' ? 'md:order-1' : ''} transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${feature.align === 'right' ? '-translate-x-12' : 'translate-x-12'}`
                }`}
                style={{ 
                  transitionDelay: `${500 + index * 200}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                <h3 className="text-scapa-blue mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
