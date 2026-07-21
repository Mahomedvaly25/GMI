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
              whileInView="animate"
              viewport={{ once: false, margin: "-10% 0px 0px 0px" }}
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

          {/* RIGHT SIDE: HIGH-IMPACT PREMIUM GRAPHIC FRAME (Mobile-First Responsive Lowbed) */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full px-2 sm:px-4 md:px-0">
            
            {/* SaaS Split Graphic container box */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] aspect-[1.2] sm:aspect-[1.15] rounded-[28px] sm:rounded-[36px] md:rounded-[40px] bg-slate-50 border border-slate-100/60 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-200/50">
              
              {/* Decorative top-right lines */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-[100px] sm:w-[150px] h-[4px] sm:h-[6px] bg-brand-yellow rounded-full z-10" />
              <div className="absolute top-9 right-6 sm:top-12 sm:right-8 w-[60px] sm:w-[90px] h-[4px] sm:h-[6px] bg-brand-yellow/30 rounded-full z-10" />

              {/* Huge 'MGI' background watermark text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="font-display font-black text-[120px] sm:text-[150px] md:text-[180px] text-white tracking-tighter drop-shadow-[0_10px_40px_rgba(0,0,0,0.02)] select-none">
                  MGI
                </span>
              </div>

              {/* Vector High-Fidelity Lowbed Heavy Transport Graphic com Vibração Suave de Rodovia */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -2, 0, 1.5, 0] 
                }}
                transition={{
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.5, delay: 0.5 },
                  scale: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }
                }}
                className="w-full relative z-10 mt-1 sm:mt-2 scale-90 sm:scale-95 md:scale-100 origin-center"
              >
                <svg viewBox="0 0 480 270" className="w-full h-auto object-contain max-w-full drop-shadow-[0_15px_30px_rgba(30,34,41,0.08)]">
                  {/* Soft Ground Shadows */}
                  <ellipse cx="240" cy="245" rx="220" ry="10" fill="#1E2229" fillOpacity="0.08" />
                  <ellipse cx="240" cy="242" rx="190" ry="5" fill="#1E2229" fillOpacity="0.12" />

                  {/* LOWBED TRAILER CHASSIS */}
                  <g id="lowbed-trailer">
                    {/* Gooseneck Connection (Pescoço de Ganso) */}
                    <path d="M 330,205 L 362,205 L 368,188 L 392,188 L 392,215 L 330,215 Z" fill="#1E2229" />
                    <path d="M 365,192 L 388,192 L 388,202 L 365,202 Z" fill="#F59E0B" />

                    {/* Lowbed Central Drop Deck (Prancha Rebaixada Central) */}
                    <rect x="125" y="215" width="205" height="12" rx="3" fill="#334155" />
                    <rect x="125" y="218" width="205" height="3" fill="#F59E0B" />

                    {/* Rear Multi-Axle Bogie Platform */}
                    <rect x="45" y="205" width="85" height="22" rx="4" fill="#1E2229" />
                    <rect x="45" y="208" width="85" height="3" fill="#F59E0B" />

                    {/* Rear Safety Ramp Guides */}
                    <path d="M 45,205 L 25,232 L 35,232 L 55,205 Z" fill="#475569" />
                  </g>

                  {/* HEAVY MACHINERY PAYLOAD (Mining Dumper / Excavator Rig) */}
                  <g id="heavy-dumper-payload">
                    {/* Main Dumper Dump-Body (Caçamba Amarela em Angulo) */}
                    <path d="M 135,138 L 290,118 L 315,175 L 135,175 Z" fill="#F59E0B" />
                    <path d="M 142,143 L 285,125 L 295,155 L 150,160 Z" fill="#D97706" fillOpacity="0.35" />

                    {/* Mining Operator Cabin */}
                    <path d="M 290,128 L 322,128 L 322,175 L 290,175 Z" fill="#1E2229" />
                    <rect x="296" y="134" width="20" height="18" rx="2" fill="#FFFFFF" fillOpacity="0.9" />

                    {/* Dumper Heavy Base Chassis */}
                    <rect x="155" y="175" width="165" height="40" rx="4" fill="#1E2229" />
                    
                    {/* Branding Tag on Machine Payload */}
                    <rect x="180" y="152" width="95" height="13" rx="2" fill="#1E2229" />
                    <text x="227" y="161" textAnchor="middle" className="font-mono text-[8px] font-bold fill-white tracking-widest uppercase">
                      HEAVY CARGO SADC
                    </text>

                    {/* Giant Mining Wheels under Heavy Cargo */}
                    <circle cx="185" cy="205" r="22" fill="#0F172A" stroke="#475569" strokeWidth="4" />
                    <circle cx="185" cy="205" r="8" fill="#F59E0B" />
                    <circle cx="285" cy="205" r="22" fill="#0F172A" stroke="#475569" strokeWidth="4" />
                    <circle cx="285" cy="205" r="8" fill="#F59E0B" />
                  </g>

                  {/* HEAVY TRACTOR TRUCK (Cavalo Mecânico Moderno Frontal) */}
                  <g id="tractor-cab">
                    {/* Cabin Body */}
                    <path d="M 370,122 L 420,122 L 452,156 L 452,225 L 370,225 Z" fill="#1E2229" />
                    
                    {/* Windows & Windshield */}
                    <path d="M 380,130 L 415,130 L 426,150 L 380,150 Z" fill="#0A192F" />
                    <path d="M 429,130 L 444,130 L 449,150 L 431,150 Z" fill="#0A192F" fillOpacity="0.9" />

                    {/* Yellow & White Brand Decals */}
                    <path d="M 375,158 L 447,158 L 447,171 L 375,171 Z" fill="#F59E0B" />
                    <path d="M 375,176 L 432,176 L 432,182 L 375,182 Z" fill="#FFFFFF" fillOpacity="0.9" />
                    <text x="408" y="167" textAnchor="middle" className="font-display font-black text-[9px] fill-brand-dark tracking-wider">
                      MGI
                    </text>

                    {/* Front Bumper, Grille & Lights */}
                    <rect x="450" y="178" width="6" height="42" rx="2" fill="#0A192F" />
                    <circle cx="452" cy="204" r="3" fill="#F59E0B" />
                    <rect x="450" y="211" width="5" height="8" rx="1.5" fill="#F59E0B" />

                    {/* Mudguard Arc */}
                    <path d="M 358,212 C 358,198 402,198 402,212" fill="none" stroke="#1E2229" strokeWidth="5" />
                    <path d="M 425,212 C 425,198 455,198 455,212" fill="none" stroke="#1E2229" strokeWidth="5" />
                  </g>

                  {/* WHEELS & AXLES */}
                  <g id="all-wheels">
                    {/* Lowbed Rear Triple Axle Wheels */}
                    <circle cx="60" cy="232" r="11" fill="#1E2229" stroke="#94A3B8" strokeWidth="2.5" />
                    <circle cx="60" cy="232" r="4" fill="#F59E0B" />

                    <circle cx="85" cy="232" r="11" fill="#1E2229" stroke="#94A3B8" strokeWidth="2.5" />
                    <circle cx="85" cy="232" r="4" fill="#F59E0B" />

                    <circle cx="110" cy="232" r="11" fill="#1E2229" stroke="#94A3B8" strokeWidth="2.5" />
                    <circle cx="110" cy="232" r="4" fill="#F59E0B" />

                    {/* Tractor Truck Heavy Wheels */}
                    <circle cx="365" cy="232" r="13" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="365" cy="232" r="5" fill="#94A3B8" />

                    <circle cx="395" cy="232" r="13" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="395" cy="232" r="5" fill="#94A3B8" />

                    <circle cx="440" cy="232" r="13" fill="#1E2229" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="440" cy="232" r="5" fill="#F59E0B" />
                  </g>
                </svg>
              </motion.div>

              {/* Truck silhouette layer for extra tech-art depth */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-brand-dark opacity-[0.05] pointer-events-none select-none w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,11L15,5H5V18H7A3,3 0 0,0 10,21A3,3 0 0,0 13,18H15A3,3 0 0,0 18,21A3,3 0 0,0 21,18H23V11M10,19A1,1 0 0,1 9,18A1,1 0 0,1 10,17A1,1 0 0,1 11,18A1,1 0 0,1 10,19M18,19A1,1 0 0,1 17,18A1,1 0 0,1 18,17A1,1 0 0,1 19,18A1,1 0 0,1 18,19Z" />
                </svg>
              </div>

            </div>

            {/* Overlapping Floating stats badge - Flutuação Vertical Parallax (Responsivo Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -6, 0] 
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.6, delay: 1.1 },
                x: { duration: 0.6, delay: 1.1 }
              }}
              className="absolute top-2 sm:top-6 lg:top-10 left-0 sm:left-[-10px] lg:left-[-20px] bg-[#1E2229] text-white p-3.5 sm:p-5 md:px-6 md:py-5 rounded-xl sm:rounded-2xl z-20 shadow-xl sm:shadow-2xl border border-slate-700/30 flex flex-col min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-display font-black text-[#F59E0B]">
                140+
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono font-bold tracking-wider uppercase text-slate-300 mt-0.5 sm:mt-1">
                {language === 'PT' ? 'Unidades de Frota' : 'Active Fleet Units'}
              </span>
            </motion.div>

            {/* Overlapping Fuel/Efficiency floating badge - Flutuação Vertical Parallax (Responsivo Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, 6, 0] 
              }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                },
                opacity: { duration: 0.6, delay: 1.3 },
                x: { duration: 0.6, delay: 1.3 }
              }}
              className="absolute bottom-2 sm:bottom-6 lg:bottom-8 right-0 sm:right-[-5px] lg:right-[-10px] bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 md:p-4 shadow-lg sm:shadow-xl flex items-center gap-2 sm:gap-3.5 z-20 max-w-[155px] sm:max-w-[175px] md:max-w-[190px]"
            >
              <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-amber-50 text-brand-yellow shrink-0">
                <Route className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[9px] text-slate-400 font-mono font-bold">GPS TELEMETRY</p>
                <p className="text-[10px] sm:text-xs font-display font-extrabold text-brand-dark mt-0.5">SADC Corridor Active</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
