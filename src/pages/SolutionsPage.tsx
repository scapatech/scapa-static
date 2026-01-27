import { useState, useEffect, useRef } from 'react';
import { Monitor, Server, Cloud, Check } from 'lucide-react';

interface SolutionsPageProps {
  onPageChange: (page: string) => void;
}

export default function SolutionsPage({ onPageChange }: SolutionsPageProps) {
  const [activeTab, setActiveTab] = useState('remedy');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tabs = [
    { id: 'remedy', label: 'Remedy', icon: Monitor },
    { id: 'thinclient', label: 'Thin Client', icon: Monitor },
    { id: 'vdi', label: 'VDI', icon: Cloud },
    { id: 'peoplesoft', label: 'PeopleSoft', icon: Server },
  ];

  const tabContent: Record<string, { title: string; description: string; features: string[] }> = {
    remedy: {
      title: 'Scapa TPP for BMC Remedy',
      description: 'Scapa TPP is a fast and cost-effective test and optimization platform for BMC Software\'s Remedy and ITSM solutions. Scapa TPP is the only tool that provides complete coverage of the Remedy infrastructure – testing the C API, the GUI and the mid-tier – enabling unrestricted and unrivalled visibility of system performance and user experience.',
      features: [
        'Complete API, GUI and mid-tier testing',
        'End-to-end performance visibility',
        'User experience monitoring',
        'Automated regression testing',
      ],
    },
    thinclient: {
      title: 'Scapa TPP for Thin Client',
      description: 'Scapa TPP is the only effective performance testing tool for businesses seeking to reduce the cost and environmental impact of application deployment through Application and Desktop Virtualization or Thin Client Solutions. Scapa TPP is also unique as it will test any application in the mix, measuring from the user perspective to provide the most accurate data to give executives better insight into their system performance.',
      features: [
        'User perspective testing',
        'Multi-application testing',
        'Environmental impact analysis',
        'Cost reduction metrics',
      ],
    },
    vdi: {
      title: 'Scapa TPP for VDI',
      description: 'Scapa TPP is the only effective performance testing tool for Virtual Desktop Infrastructure solutions. It provides comprehensive testing capabilities from the user perspective, ensuring optimal performance and user experience for VDI deployments.',
      features: [
        'User perspective testing',
        'VDI performance monitoring',
        'Infrastructure optimization',
        'End-to-end visibility',
      ],
    },
    peoplesoft: {
      title: 'Scapa TPP for PeopleSoft',
      description: 'Scapa TPP provides the assurance that your PeopleSoft application is of the highest quality and is working at optimum performance during migration, upgrade or other system change projects.',
      features: [
        'Migration testing',
        'Upgrade validation',
        'Performance optimization',
        'Continuous monitoring',
      ],
    },
  };

  const platforms = [
    'Citrix XenApp',
    'Citrix XenDesktop',
    'VMware View',
    'Microsoft Remote Desktop Services',
    'BMC Software Remedy ITSM Suite',
    'Oracle PeopleSoft Applications',
    'Oracle Forms',
    'Mendix App Platform',
    'Web Applications and Mobile (iOS, Android and Windows)',
  ];

  const services = [
    { title: 'Capacity planning and testing', desc: 'Understand what is the right system size for your business needs' },
    { title: 'Performance Testing, Analysis and Tuning', desc: 'Find out about your system and where improvements can be made' },
    { title: 'Performance and Capacity regression and upgrade testing', desc: 'Ongoing tests allow you to maintain performance through system changes' },
    { title: 'Benchmarking MS Office and custom applications', desc: 'Discover what performance levels your system can achieve' },
    { title: 'Trouble Shooting', desc: 'Uncover what is causing your system problem through root cause analysis' },
    { title: 'Continued Assurance SLA Monitoring', desc: 'Ensure clients can see that you are meeting agreed service levels' },
    { title: 'Validating new systems on your architecture', desc: 'Work out which software application works best for you' },
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
            Solutions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-scapa section-padding py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Overview */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <p className="text-gray-600 leading-relaxed mb-8">
              Scapa Technologies provides best of breed testing and monitoring software
              solutions and services. These will help you quickly identify and resolve bottlenecks
              and other capacity, tuning, or reliability issues in your unique system architecture.
            </p>
            
            <h3 className="text-scapa-blue mb-4">We specialize in testing and monitoring:</h3>
            
            <div className="mb-8">
              <h4 className="text-gray-700 font-semibold mb-3">Virtual Desktop Infrastructures (VDI) and Thin Client environments:</h4>
              <ul className="space-y-2">
                {platforms.slice(0, 4).map((platform, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check size={14} className="text-scapa-red" />
                    {platform}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-gray-700 font-semibold mb-3">...and a great many more!</h4>
              <ul className="space-y-2">
                {platforms.slice(4).map((platform, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check size={14} className="text-scapa-red" />
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Services */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Use our tools to test a number of systems at once, as well as a mixture of API and 
              GUI tests at the same time, over a variety of locations across the world:
            </p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <h4 className="text-scapa-blue font-semibold text-sm mb-1">{service.title}</h4>
                  <p className="text-gray-500 text-xs">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Tabs Section */}
        <div 
          className={`mt-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <h2 className="text-scapa-blue text-2xl mb-8">Our Solutions</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-scapa-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-8 rounded-lg">
            <div>
              <div className="w-16 h-16 rounded-full bg-scapa-red/10 flex items-center justify-center mb-6">
                {(() => {
                  const IconComponent = tabs.find(t => t.id === activeTab)?.icon || Monitor;
                  return <IconComponent size={32} className="text-scapa-red" />;
                })()}
              </div>
              <h3 className="text-scapa-blue text-xl mb-4">{tabContent[activeTab].title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{tabContent[activeTab].description}</p>
              <ul className="space-y-2">
                {tabContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Check size={14} className="text-scapa-red" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onPageChange('contact')}
                className="btn-secondary mt-6"
              >
                MORE INFO
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-48 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="10,90 90,90 90,10" fill="var(--scapa-black)" />
                      <polygon points="10,90 90,10 10,10" fill="var(--scapa-red)" />
                    </svg>
                  </div>
                  <span className="text-scapa-blue font-semibold">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div 
          className={`mt-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <h3 className="text-scapa-blue text-xl mb-4">Pricing</h3>
          <p className="text-gray-600 leading-relaxed">
            Scapa TPP pricing is determined by the number of virtual users of a system, whether in a 
            test laboratory or production system environment. Please{' '}
            <button 
              onClick={() => onPageChange('contact')}
              className="text-scapa-blue hover:underline"
            >
              contact us
            </button>
            {' '}to discuss your specific licensing requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
