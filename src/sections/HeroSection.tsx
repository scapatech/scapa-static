import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onPageChange: (page: string) => void;
}

export default function HeroSection({ onPageChange }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/hero-slide-1.jpg',
      title: 'Scapa Technologies',
      description: 'The end to end, security and application delivery performance specialists, providing best of breed testing and monitoring software solutions and services for BMC Remedy ITSM, Oracle PeopleSoft, VDI/Thin Client environments, web and mobile applications and many more...',
      cta: 'Find out more',
      ctaAction: () => onPageChange('solutions'),
    },
    {
      id: 2,
      image: '/images/hero-slide-2.jpg',
      title: 'Scapa Test and Performance Platform Products',
      description: 'Innovative and powerful benchmarking, performance testing, diagnosis and monitoring software',
      cta: 'View our products',
      ctaAction: () => onPageChange('solutions'),
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-800 ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
            }}
          />
          
          {/* Content */}
          <div className="relative h-full container-scapa section-padding flex items-center">
            <div 
              className={`max-w-2xl transition-all duration-700 ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: index === currentSlide ? '200ms' : '0ms',
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <h1 
                className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-6"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                {slide.title}
              </h1>
              <p 
                className="text-white/90 text-base md:text-lg leading-relaxed mb-8"
                style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}
              >
                {slide.description}
              </p>
              <button
                onClick={slide.ctaAction}
                className="btn-primary animate-pulse-glow"
              >
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
