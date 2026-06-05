import { AlertCircle, Github } from 'lucide-react';

export default function ClosureBanner() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: 'var(--scapa-red)' }}
    >
      <div className="container-scapa py-4 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <AlertCircle className="text-white shrink-0" size={24} />
          <div className="flex-1">
            <p className="text-white font-semibold text-sm md:text-base">
              Scapa Technologies Limited has ceased trading and is in the process of being dissolved.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-white/90 text-sm">The Scapa software is now open source and available at</span>
              <a
                href="https://github.com/scapatech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white font-medium underline hover:no-underline transition-opacity hover:opacity-90 text-sm"
              >
                <Github size={16} />
                github.com/scapatech
              </a>
            </div>
            <p className="text-white/90 text-sm mt-2">
              For software enquiries, please open an issue at{' '}
              <a
                href="https://github.com/scapatech/stpp/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-opacity hover:opacity-90 font-medium"
              >
                github.com/scapatech/stpp/issues
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
