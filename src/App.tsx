import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import WelcomeSection from './sections/WelcomeSection';
import RequestCallSection from './sections/RequestCallSection';
import ProductsSection from './sections/ProductsSection';
import FeaturesSection from './sections/FeaturesSection';
import CaseStudiesCTA from './sections/CaseStudiesCTA';
import TestimonialsSection from './sections/TestimonialsSection';
import ClientLogosSection from './sections/ClientLogosSection';
import FooterCTABanner from './sections/FooterCTABanner';
import Footer from './sections/Footer';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import SuccessPage from './pages/SuccessPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    scrollToTop();
  };

  // Home Page Component
  const HomePage = () => (
    <>
      <HeroSection onPageChange={handlePageChange} />
      <WelcomeSection />
      <RequestCallSection onPageChange={handlePageChange} />
      <ProductsSection onPageChange={handlePageChange} />
      <FeaturesSection />
      <CaseStudiesCTA onPageChange={handlePageChange} />
      <TestimonialsSection />
      <ClientLogosSection />
      <FooterCTABanner onPageChange={handlePageChange} />
    </>
  );

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return <SolutionsPage onPageChange={handlePageChange} />;
      case 'services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case 'success':
        return <SuccessPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'cookies':
        return <CookiePolicyPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-scapa-blue text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-scapa-dark-blue hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}

export default App;
