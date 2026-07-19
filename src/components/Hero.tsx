import { motion } from 'motion/react';
import { Language, TranslationDictionary } from '../types';
import { TRANSLATIONS } from '../data';
import { ArrowUpRight, ShieldCheck, Zap, Fuel, Route, Truck } from 'lucide-react';

interface HeroProps {
  language: Language;
  onNavigateToCalculator: () => void;
  onNavigateToCorridors: () => void;
}

export default function Hero({ language, onNavigateToCalculator, onNavigateToCorridors }: HeroProps) {
  const dict: TranslationDictionary = TRANSLATIONS[language];

  // Split title for kinetic Pop-in word-by-word animations
  const titleWords = dict.heroTitle.split(' ');

  // Framer Motion Variants for Pop-in kinetic animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-100">
      
      {/* Background Subtle Geometrical Parallax Shapes - Stylized low opacity elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Soft yellow circle */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-[10%] top-[15%] w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-3xl"
        />

        {/* Soft support blue geometric line */}
        <motion.div
          animate={{
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-[-5%] bottom-[10%] w-[500px] h-[300px] bg-brand-blue/[0.01] rounded-tr-[150px] border border-brand-blue/[0.03] transform -rotate-6"
        />

        {/* Big background watermark vector map matching the design theme */}
        <div className="absolute right-[-100px] top-[-100px] opacity-[0.03] text-brand-blue w-[600px] h-[600px] z-0">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
            <path d="M80,10 Q100,0 120,10 T150,40 T170,80 T150,120 T110,160 T70,180 T40,150 T20,110 T30,60 T60,30 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: KINETIC TYPOGRAPHY & COPY (SaaS Split Layout Style) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline Badge with line prepended matching "SaaS split theme" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-brand-blue mb-6 self-start"
            >
              <div className="w-[30px] h-[2px] bg-brand-yellow" />
              <span className="text-xs font-display font-extrabold tracking-[3px] uppercase text-brand-blue">
                {language === 'PT' ? 'FROTA REGIONAL ATIVA' : 'POWERING GROWTH'}
              </span>
            </motion.div>

            {/* Kinetic Typography Line Mask Reveal */}
            <motion.h1
              variants={{ animate: { transition: { staggerChildren: 0.04 } } }}
              initial="initial"
              animate="animate"
              className="text-5xl sm:text-6xl lg:text-[80px] font-display font-black text-brand-dark tracking-[-3px] leading-[0.95] text-left overflow-hidden flex flex-wrap"
            >
              {titleWords.map((word, i) => {
                const isHighlight = 
                  word.includes('ÁFRICA') || 
                  word.includes('SOUTHERN') || 
                  word.includes('PRECISÃO') || 
                  word.includes('PRECISION') || 
                  word.includes('ENERGIA') || 
                  word.includes('ENERGY') ||
                  word.includes('FORWARD.');
                
                return (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { y: "100%", opacity: 0 },
                      animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] } }
                    }}
                    className={`inline-block origin-bottom mr-[0.25em] ${
                      isHighlight ? 'text-brand-yellow drop-shadow-sm' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-xl text-left font-light"
            >
              {dict.heroSub}
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* Main Call to Action Button */}
              <button
                onClick={onNavigateToCalculator}
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-display font-extrabold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2 group border border-brand-yellow uppercase tracking-wider"
              >
                <span>{dict.heroCTA}</span>
                <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Secondary Corridor View Button */}
              <button
                onClick={onNavigateToCorridors}
                className="bg-slate-50 hover:bg-slate-100 text-brand-dark font-display font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-2 border border-slate-200"
              >
                <span>{dict.heroSecondary}</span>
                <span className="text-brand-yellow">→</span>
              </button>
            </motion.div>

            {/* Safety Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-yellow shrink-0" />
                <span className="text-xs font-mono font-medium text-slate-600">SADC Certificado</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-yellow shrink-0" />
                <span className="text-xs font-mono font-medium text-slate-600">Rastreio Satélite</span>
              </div>
              <div className="flex items-center gap-2">
                <Route className="w-5 h-5 text-brand-yellow shrink-0" />
                <span className="text-xs font-mono font-medium text-slate-600">Garantia Aduaneira</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: HIGH-IMPACT PREMIUM GRAPHIC FRAME (Matches SaaS Split Layout Style exactly) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* SaaS Split Graphic container box */}
            <div className="relative w-full max-w-[480px] aspect-[1.15] rounded-[40px] bg-slate-50 border border-slate-100/60 p-8 flex items-center justify-center overflow-hidden shadow-2xl shadow-slate-200/50">
              
              {/* Decorative top-right lines */}
              <div className="absolute top-8 right-8 w-[150px] h-[6px] bg-brand-yellow rounded-full z-10" />
              <div className="absolute top-12 right-8 w-[90px] h-[6px] bg-brand-yellow/30 rounded-full z-10" />

              {/* Huge 'MGI' background watermark text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="font-display font-black text-[180px] text-white tracking-tighter drop-shadow-[0_10px_40px_rgba(0,0,0,0.02)] select-none">
                  MGI
                </span>
              </div>

              {/* Vector High-Fidelity Truck Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
                className="w-full relative z-10 mt-6"
              >
                <svg viewBox="0 0 400 300" className="w-full drop-shadow-[0_15px_30px_rgba(30,34,41,0.08)]">
                  {/* Ground Shadow */}
                  <ellipse cx="200" cy="245" rx="140" ry="12" fill="#1E2229" fillOpacity="0.12" />

                  {/* Truck Cabin (Cab) */}
                  <g id="truck-cab" className="transition-all duration-300">
                    {/* Cabin back cover */}
                    <path d="M280,110 L315,110 L315,225 L280,225 Z" fill="#1E2229" />
                    {/* Main Cab body */}
                    <path d="M315,120 L355,120 L375,150 L375,225 L315,225 Z" fill="#1E2229" />
                    {/* Yellow Decals on Cab side */}
                    <path d="M320,135 L350,135 L360,150 L320,150 Z" fill="#F59E0B" />
                    <path d="M320,160 L368,160 L368,185 L320,185 Z" fill="#F59E0B" fillOpacity="0.8" />
                    <path d="M330,195 L368,195 L368,205 L330,205 Z" fill="#FFFFFF" />
                    
                    {/* Cabin Window */}
                    <path d="M325,128 L350,128 L360,145 L325,145 Z" fill="#0A192F" />

                    {/* Windshield */}
                    <path d="M358,128 L368,128 L373,145 L362,145 Z" fill="#0A192F" fillOpacity="0.9" />

                    {/* Front Grille & bumper */}
                    <rect x="368" y="175" width="8" height="40" rx="3" fill="#0A192F" />
                    <circle cx="372" cy="205" r="3" fill="#F59E0B" />
                    
                    {/* Mudguard */}
                    <path d="M310,210 C310,200 350,200 350,210" fill="none" stroke="#1E2229" strokeWidth="6" />
                  </g>

                  {/* Cargo Container (Modern, High-Tech, Clean) */}
                  <g id="truck-trailer">
                    {/* Main box */}
                    <rect x="90" y="80" width="190" height="145" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
                    
                    {/* Yellow Stripes (Brand Visual) */}
                    <rect x="90" y="130" width="190" height="15" fill="#F59E0B" />
                    <rect x="110" y="150" width="150" height="6" fill="#1E2229" />
                    
                    {/* MGI Logo branding text on Trailer */}
                    <text x="185" y="118" textAnchor="middle" className="font-display font-black text-xl fill-brand-dark tracking-wider">
                      MGI LOGISTICS
                    </text>
                    <text x="185" y="180" textAnchor="middle" className="font-mono text-[9px] font-bold fill-slate-400 tracking-widest uppercase">
                      • CORREDORES TRANSITO SADC •
                    </text>

                    {/* Industrial lock mechanism */}
                    <line x1="95" y1="85" x2="95" y2="220" stroke="#CBD5E1" strokeWidth="2" />
                    <line x1="275" y1="85" x2="275" y2="220" stroke="#CBD5E1" strokeWidth="2" />
                  </g>

                  {/* Chassis, wheels & components */}
                  <g id="truck-wheels">
                    <rect x="80" y="222" width="240" height="8" fill="#475569" />
                    <circle cx="330" cy="235" r="15" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="330" cy="235" r="6" fill="#94A3B8" />

                    <circle cx="115" cy="235" r="15" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="115" cy="235" r="6" fill="#94A3B8" />

                    <circle cx="150" cy="235" r="15" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="150" cy="235" r="6" fill="#94A3B8" />

                    <circle cx="250" cy="235" r="15" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="250" cy="235" r="6" fill="#94A3B8" />
                  </g>
                </svg>
              </motion.div>

              {/* Truck silhouette layer for extra tech-art depth */}
              <div className="absolute bottom-4 right-4 text-brand-dark opacity-[0.05] pointer-events-none select-none w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,11L15,5H5V18H7A3,3 0 0,0 10,21A3,3 0 0,0 13,18H15A3,3 0 0,0 18,21A3,3 0 0,0 21,18H23V11M10,19A1,1 0 0,1 9,18A1,1 0 0,1 10,17A1,1 0 0,1 11,18A1,1 0 0,1 10,19M18,19A1,1 0 0,1 17,18A1,1 0 0,1 18,17A1,1 0 0,1 19,18A1,1 0 0,1 18,19Z" />
                </svg>
              </div>

            </div>

            {/* Overlapping Floating stats badge precisely mimicking SaaS split style */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: -40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute top-12 left-[-20px] bg-[#1E2229] text-white px-6 py-5 rounded-2xl z-20 shadow-2xl border border-slate-700/30 flex flex-col min-w-[160px]"
            >
              <span className="text-2xl font-display font-black text-[#F59E0B]">
                140+
              </span>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-300 mt-1">
                {language === 'PT' ? 'Unidades de Frota' : 'Active Fleet Units'}
              </span>
            </motion.div>

            {/* Overlapping Fuel/Efficiency floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="absolute bottom-8 right-[-10px] bg-white border border-slate-100 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 z-20 max-w-[190px]"
            >
              <div className="p-2.5 rounded-xl bg-amber-50 text-brand-yellow">
                <Route className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-mono font-bold">GPS TELEMETRY</p>
                <p className="text-xs font-display font-extrabold text-brand-dark mt-0.5">SADC Corridor Active</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
