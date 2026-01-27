import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SuccessPageProps {
  onPageChange: (page: string) => void;
}

export default function SuccessPage({ onPageChange }: SuccessPageProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const caseStudies = {
    remedy: [
      { name: 'CDW and Column Technologies', link: '/case-studies/cdw-column-technologies.md' },
      { name: 'US Healthcare Organization and Rapid Technologies', link: '/case-studies/us-healthcare-rapid-technologies.md' },
      { name: 'British Telecom (BT)', link: '/case-studies/british-telecom.md' },
      { name: 'IT Consultancy Testing Remedy Mid-Tier', link: '/case-studies/it-consultancy-remedy.md' },
      { name: 'SAAS Performance – IT Solutions Provider', link: '/case-studies/saas-performance-it-solutions.md' },
    ],
    vdi: [
      { name: 'Cisco Systems Inc. (1)', link: '/case-studies/cisco-systems-1.md' },
      { name: 'SwissRe', link: '/case-studies/swissre.md' },
      { name: 'Cisco Systems Inc. (2) – validated design guide to deploying an end-to-end Virtual eXperience Infrastructure on VMware View', link: '/case-studies/cisco-systems-2.md' },
    ],
    thinClient: [
      { name: 'Cerner Corporation', link: '/case-studies/cerner-corporation-thin-client.md' },
      { name: 'Anglia Water', link: '/case-studies/anglia-water.md' },
    ],
    peopleSoft: [
      { name: 'Cerner Corporation', link: '/case-studies/cerner-corporation-peoplesoft.md' },
    ],
    other: [
      { name: 'ManSystems B.V.', link: '/case-studies/mansystems.md' },
      { name: 'ECABO', link: '/case-studies/ecabo.md' },
    ],
  };

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
            Case Studies
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
            <p className="text-scapa-blue text-lg leading-relaxed mb-6">
              Scapa TPP is used across the globe by our customers, who span a wide variety of 
              different industry sectors, our consultants and by our partner organizations to 
              deploy and maintain the performance of business-critical IT systems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Scapa TPP is technology-independent and is, therefore, applicable to a great many 
              IT systems, although we specialize in testing BMC's Remedy AR System, Oracle's 
              PeopleSoft applications and Thin Client and VDI systems such as Citrix XenApp and 
              XenDesktop, Microsoft Remote Desktop Services and VMware View.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here are a few of our clients, with links to recent case study information:
            </p>
          </div>

          {/* Right Column - Case Studies List */}
          <div 
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            {/* Remedy Case Studies */}
            <div>
              <h3 className="text-scapa-blue text-lg mb-4">Remedy Case Studies</h3>
              <ul className="space-y-2">
                {caseStudies.remedy.map((study, index) => (
                  <li key={index}>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scapa-blue text-sm hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      {study.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* VDI Case Studies */}
            <div>
              <h3 className="text-scapa-blue text-lg mb-4">VDI Case Studies</h3>
              <ul className="space-y-2">
                {caseStudies.vdi.map((study, index) => (
                  <li key={index}>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scapa-blue text-sm hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      {study.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thin Client Case Studies */}
            <div>
              <h3 className="text-scapa-blue text-lg mb-4">Thin Client Case Studies</h3>
              <ul className="space-y-2">
                {caseStudies.thinClient.map((study, index) => (
                  <li key={index}>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scapa-blue text-sm hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      {study.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* PeopleSoft Case Studies */}
            <div>
              <h3 className="text-scapa-blue text-lg mb-4">PeopleSoft Case Studies</h3>
              <ul className="space-y-2">
                {caseStudies.peopleSoft.map((study, index) => (
                  <li key={index}>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scapa-blue text-sm hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      {study.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Case Studies */}
            <div>
              <h3 className="text-scapa-blue text-lg mb-4">Other Scapa TPP Case Studies</h3>
              <ul className="space-y-2">
                {caseStudies.other.map((study, index) => (
                  <li key={index}>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scapa-blue text-sm hover:underline flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      {study.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-500 text-sm pt-4">
              Additional case studies will be made available here, so please check back regularly. 
              Or,{' '}
              <button 
                onClick={() => onPageChange('contact')}
                className="text-scapa-blue hover:underline"
              >
                contact us
              </button>
              {' '}for additional reference information regarding our Scapa TPP product or associated services.
            </p>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="py-12 border-t border-gray-200">
        <div className="container-scapa section-padding">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Swiss Re', 'Cisco', 'BT', 'Comcast', 'Cerner'].map((client, index) => (
              <span 
                key={index} 
                className="text-gray-400 font-semibold text-lg"
                style={{ filter: 'grayscale(100%)' }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="py-12" style={{ backgroundColor: 'var(--scapa-blue)' }}>
        <div className="container-scapa section-padding text-center">
          <h3 className="text-white text-xl md:text-2xl font-light mb-6">
            Find out how Scapa TPP can help your business perform better.
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onPageChange('contact')} className="btn-primary">
              REQUEST A DEMO
            </button>
            <button 
              onClick={() => onPageChange('contact')} 
              className="bg-white text-scapa-blue px-6 py-3 text-sm font-semibold rounded-sm hover:bg-gray-100 transition-all"
            >
              ENQUIRE TODAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
