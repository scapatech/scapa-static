import { useState, useEffect, useRef } from 'react';
import { Check, Quote } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export default function ServicesPage({ onPageChange }: ServicesPageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonials = [
    {
      quote: "THE SKILL LEVEL AND KNOWLEDGE OF THE CONSULTING RESOURCES, AS WELL AS THE SUPPORT ENGINEERS, (AT SCAPA TECHNOLOGIES) IS TREMENDOUS.",
      author: "Chuck Hunt",
      title: "Technology Architect, CTS Solutions, Cerner Corporation",
    },
    {
      quote: "WE ACQUIRED THE SCAPA TPP TOOL AND ENGAGED SCAPA SERVICES TO GET THE BEST FROM THE TOOL IN SHORT DEADLINES AS THIS KIND OF TESTING IS HIGHLY SPECIALISED...",
      author: "Dom Lewington",
      title: "Column Technologies Performance Management Director",
    },
    {
      quote: "DEREK (SCAPA CONSULTANT) WAS AN EXCEPTIONAL RESOURCE (AND ONE) WE WOULD HAPPILY ENGAGE AGAIN IN THE FUTURE...",
      author: "Dom Lewington",
      title: "Column Technologies Performance Management Director",
    },
  ];

  const consultingServices = [
    'End-to-end Testing',
    'Scalability Profiling',
    'Bottleneck Identification',
    'Benchmarking',
    'Capacity Planning',
    'Performance Comparison',
    'Migration',
    'Server Consolidation',
    'Service Availability',
    'Diagnostic Testing',
    'Desktop Virtualization',
    'Proof-of-concept',
  ];

  const serviceCards = [
    {
      title: 'Consulting Services',
      description: 'Scapa consultants and partners specialize in performance testing of Remedy-based solutions, such as the ITSM suite of applications, systems based on the Mendix application platform, web applications and desktop virtualization deployments (e.g. Citrix XenApp/XenDesktop, VMware View and Microsoft Remote Desktop Services and Terminal Server).',
    },
    {
      title: 'System Health Check-up',
      description: 'You may be concerned that your systems will not accommodate future demands. With their wide-ranging experience in projects spanning many verticals and an even greater variety of IT systems, our consultants and partners can conduct thorough reviews of your current and future capacity requirements.',
    },
    {
      title: 'Pre-Flight Assurance Testing',
      description: 'Although Scapa promotes continuous and on-going testing throughout the application lifecycle, for many businesses testing can be a last minute activity. We regularly deliver pre-flight tests in 1 to 3 weeks, identifying problem areas quickly and providing businesses with the peace of mind that performance, stability and capacity-related issues are resolved prior to rollout.',
    },
    {
      title: 'Training Services',
      description: 'For businesses that want to be self-sufficient with respect to performance testing, our training course is adapted and personalized to your specific IT systems. We help you run tests on your system with your applications to get you up and running fast – typically within five days.',
    },
    {
      title: 'Fire Fight Services',
      description: 'Picture the scenario: your system reliability, performance, scalability or capacity is not what it should be on the production system or, even worse, has failed, causing untold damage to your business. Despite best efforts internally, the root cause remains elusive. Our consultants and partners have substantial on-site project experience and have helped some of the biggest companies in the world to identify underlying systems issues when all internal resources have been exhausted.',
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="py-12 md:py-16" style={{ backgroundColor: 'var(--scapa-blue)' }}>
        <div className="container-scapa section-padding">
          <h1 
            className={`text-white text-3xl md:text-4xl font-light transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            Services
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-scapa section-padding py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h2 className="text-scapa-blue text-2xl mb-6">Scapa Technologies' Services</h2>
            <p className="text-scapa-blue text-lg leading-relaxed mb-6">
              Scapa Technologies is a privately-held, venture-backed, independent software vendor 
              and performance testing and security services company. We believe our service to 
              customers is greatly improved because we are independent.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our dedicated support team is quick to respond to queries, highly knowledgeable and 
              experienced. Their unrivalled expertise and understanding comes from having worked with 
              a wide range of customers across many verticals and from being involved in some of the 
              largest and most complex system deployments worldwide, for over 20 years. This experience 
              has allowed us to evolve our complete testing methodology, Scapa Expedite.
            </p>

            {/* White Papers */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-scapa-blue mb-4">Find out more about our services and our unique methodology:</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/documents/whitepapers/scapa-professional-services-datasheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scapa-blue text-sm hover:underline text-left block"
                  >
                    Scapa Technologies Professional Services Datasheet
                  </a>
                </li>
                <li>
                  <a
                    href="/documents/whitepapers/scapa-expedite-methodology-whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scapa-blue text-sm hover:underline text-left block"
                  >
                    Scapa Expedite Methodology White Paper
                  </a>
                </li>
                <li>
                  <a
                    href="/documents/whitepapers/scapa-expedite-testing-activities-whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scapa-blue text-sm hover:underline text-left block"
                  >
                    Scapa Expedite Testing Activities White Paper
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Device Icons */}
          <div 
            className={`flex items-center justify-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <div className="flex items-end gap-4">
              <div className="text-center">
                <div className="w-24 h-20 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-2 shadow-md">
                  <svg viewBox="0 0 100 80" className="w-16 h-12">
                    <polygon points="10,70 90,70 90,10" fill="var(--scapa-black)" />
                    <polygon points="10,70 90,10 10,10" fill="var(--scapa-red)" />
                  </svg>
                </div>
                <span className="text-scapa-blue text-sm">Thin Client</span>
              </div>
              <div className="text-center">
                <div className="w-32 h-24 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-2 shadow-md">
                  <svg viewBox="0 0 100 80" className="w-20 h-16">
                    <polygon points="10,70 90,70 90,10" fill="var(--scapa-black)" />
                    <polygon points="10,70 90,10 10,10" fill="var(--scapa-red)" />
                  </svg>
                </div>
                <span className="text-scapa-blue text-sm">Remedy</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-20 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-2 shadow-md">
                  <svg viewBox="0 0 100 80" className="w-16 h-12">
                    <polygon points="10,70 90,70 90,10" fill="var(--scapa-black)" />
                    <polygon points="10,70 90,10 10,10" fill="var(--scapa-red)" />
                  </svg>
                </div>
                <span className="text-scapa-blue text-sm">VDI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="py-12" style={{ backgroundColor: 'var(--scapa-blue)' }}>
        <div className="container-scapa section-padding text-center">
          <h3 
            className={`text-white text-xl md:text-2xl font-light mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            We deliver on our projects, contact us today to see how
          </h3>
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <button onClick={() => onPageChange('contact')} className="btn-primary">
              REQUEST A DEMO
            </button>
            <button 
              onClick={() => onPageChange('contact')} 
              className="bg-white text-scapa-blue px-6 py-3 text-sm font-semibold rounded-sm hover:bg-gray-100 transition-all"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-scapa section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={32} className="text-scapa-blue/30 mx-auto mb-6" />
            <p 
              className={`text-gray-700 text-lg leading-relaxed mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {testimonials[activeTestimonial].quote}
            </p>
            <p className="text-scapa-blue font-semibold">{testimonials[activeTestimonial].author}</p>
            <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].title}</p>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-scapa-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="py-12 md:py-16">
        <div className="container-scapa section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCards.map((card, index) => (
              <div 
                key={index}
                className={`bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${600 + index * 100}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                <h3 className="text-scapa-blue text-lg mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-12 md:py-16" style={{ backgroundColor: 'var(--scapa-blue)' }}>
        <div className="container-scapa section-padding">
          <h3 className="text-white text-xl mb-8 text-center">Our services include:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {consultingServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <Check size={16} className="flex-shrink-0" />
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
