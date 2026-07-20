import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoutesSection from './components/RoutesSection';
import Services from './components/Services';
import SobreNos from './components/SobreNos';
import FleetShowcase from './components/FleetShowcase';
import CargoShowcase from './components/CargoShowcase';
import TimelineSection from './components/TimelineSection';
import ImpactNumbersSection from './components/ImpactNumbersSection';
import FaqSection from './components/FaqSection';
import CtaBreakSection from './components/CtaBreakSection';
import ComplianceSection from './components/ComplianceSection';
import CommercialContact from './components/CommercialContact';
import LocationMapSection from './components/LocationMapSection';
import Footer from './components/Footer';
import { Language } from './types';
import { TRANSLATIONS, FLEETS, STATS } from './data';
import { Truck, Navigation, Globe, CheckCircle2, Shield, AlertCircle } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('PT');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const dict = TRANSLATIONS[language];

  // Helper scroll actions
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCalculatorSuccess = (details: string) => {
    setToastMessage(details);
    // Auto clear toast after 5s
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <>
      {/* Preloader Splash Screen */}
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F8FAFC] text-brand-dark font-sans flex flex-col justify-between selection:bg-brand-yellow selection:text-brand-dark antialiased">
      
      {/* Dynamic Header Toast for Interactive Quotes */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-4 right-4 md:left-auto md:right-8 z-50 bg-brand-dark text-white p-4 rounded-2xl shadow-xl border border-brand-yellow/30 max-w-sm flex items-start gap-3.5"
          >
            <div className="p-2 rounded-xl bg-brand-yellow text-brand-dark shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-brand-yellow uppercase tracking-wider">
                {language === 'PT' ? 'PEDIDO ENVIADO' : 'REQUEST TRANSMITTED'}
              </p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {language === 'PT' 
                  ? 'A sua simulação aduaneira e de carga foi enviada ao Hub MGI Porto da Beira.' 
                  : 'Your customs and weight metrics have been relayed to the MGI Beira Port Terminal Hub.'}
              </p>
              <p className="text-[10px] text-slate-400 font-mono mt-2 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Pristine Responsive Navigation Header */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Page Body */}
      <main className="flex-1 bg-white">
        
        {/* Hero Section */}
        <Hero
          language={language}
          onNavigateToCalculator={() => scrollToSection('contacto')}
          onNavigateToCorridors={() => scrollToSection('corredores')}
        />

        {/* HIGH-IMPACT ANIMATED INFOGRAPHIC METRICS */}
        <ImpactNumbersSection language={language} />

        {/* Clean Industrial Services */}
        <Services
          language={language}
          onNavigateToCalculator={() => scrollToSection('contacto')}
        />

        {/* Sobre Nós / Pilares Institucionais */}
        <SobreNos language={language} />

        {/* SADC TRANSIT CORRIDORS & LOGISTICS ROUTES */}
        <RoutesSection
          language={language}
          onNavigateToContact={() => scrollToSection('contacto')}
        />

        {/* Premium Fleet Showcase Section */}
        <FleetShowcase language={language} />

        {/* Real Cargo Portfolio Showcase */}
        <CargoShowcase language={language} />

        {/* 40+ Years Historical Timeline Section */}
        <TimelineSection language={language} />

        {/* Safety & SADC Compliance Standards Section */}
        <ComplianceSection language={language} />

        {/* FAQ Accordion Section */}
        <FaqSection language={language} />

        {/* Dynamic CTA Break Banner */}
        <CtaBreakSection language={language} />

        {/* Commercial Contact Section */}
        <CommercialContact language={language} />

        {/* Location Map Section */}
        <LocationMapSection language={language} />

      </main>

      {/* Elegant Seaport Coordinates Footer */}
      <Footer language={language} />

    </div>
    </>
  );
}
