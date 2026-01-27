import { useEffect, useRef, useState } from 'react';
import { Check, Zap, Monitor, ThumbsUp } from 'lucide-react';

export default function WelcomeSection() {
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

  const services = [
    'No code testing for complex environments (BMC Helix/Remedy ITSM a specialty)',
    'Automated continuous testing and regression testing, API and service test automation',
    'Introducing performance engineering into a SDLC, integrating test tool and activities into your stack and processes',
    'Performance Testing, Analysis and Tuning, Capacity planning and testing',
    'Our bespoke Trouble Shooting Service will uncover what is causing your system problem through root cause analysis and resolution',
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container-scapa section-padding">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <h2 className="text-scapa-blue mb-3">Welcome to Scapa Technologies</h2>
          <p className="text-scapa-blue text-lg">
            The end to end security and application delivery performance specialists
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h3 className="text-scapa-blue mb-6">Scapa Technologies</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Scapa Technologies take pride in having the ability and skill set to find the most 
                troublesome and well-hidden performance problems in complex architectures. We are the 
                team that is called into projects where numerous visits from architects and vendors 
                have not resolved the clients issues.
              </p>
              <p>
                Within a short period, we provide a very cost-effective service monitoring, trend 
                analysis and testing of applications under load. This helps identify issues and where 
                the weaknesses are in the overall architecture. We focus on the end-user experience; 
                we find problems that traditional testing and monitoring solutions would struggle to 
                identify.
              </p>
              <p>
                We have helped clients save millions of dollars on technology that would not suit 
                their needs by providing evidence that the wrong technology stacks were being considered. 
                We help identify issues that can quickly be resolved using the business projects in 
                on time and on budget.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h3 className="text-scapa-blue mb-6">What makes Scapa different?</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                An engagement with Scapa will make your organisation more responsive. Your team's 
                productivity and efficiency will increase, and make IT more productive improving your 
                business agility and resilience.
              </p>
              <p>
                Scapa teams troubleshoot systems with an open mind, using tools and techniques that 
                will deliver rapid results. We bring the speed of Automated testing to enterprise systems.
              </p>
            </div>

            {/* Services List */}
            <h4 className="text-scapa-blue mb-4">Our services include:</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${400 + index * 80}ms`,
                    transitionTimingFunction: 'var(--ease-spring)',
                  }}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-scapa-red/10 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-scapa-red" />
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Icons */}
        <div 
          className={`grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-scapa-red/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Zap size={28} className="text-scapa-red" />
            </div>
            <h4 className="text-scapa-blue text-sm font-semibold">Speed/Time to Results</h4>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-scapa-red/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Monitor size={28} className="text-scapa-red" />
            </div>
            <h4 className="text-scapa-blue text-sm font-semibold">Unique Testing Methodology</h4>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-scapa-red/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ThumbsUp size={28} className="text-scapa-red" />
            </div>
            <h4 className="text-scapa-blue text-sm font-semibold">20+ Years Expertise</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
