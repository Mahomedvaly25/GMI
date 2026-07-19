import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language } from '../types';
import { Calendar, Award, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

interface TimelineSectionProps {
  language: Language;
}

interface Milestone {
  year: string;
  titlePT: string;
  titleEN: string;
  descPT: string;
  descEN: string;
  iconType: 'foundation' | 'expansion' | 'fleet' | 'present';
}

const MILESTONES: Milestone[] = [
  {
    year: '1984',
    titlePT: 'Início e Fundação das Operações',
    titleEN: 'Operations Founded',
    descPT: 'Início das operações de transporte rodoviário com foco em mercadorias nacionais e consolidação de frete em Moçambique.',
    descEN: 'Start of road freight operations focused on domestic goods and freight consolidation inside Mozambique.',
    iconType: 'foundation'
  },
  {
    year: '1998',
    titlePT: 'Entrada no Mercado SADC',
    titleEN: 'SADC Regional Expansion',
    descPT: 'Entrada oficial nos principais corredores comerciais da SADC (Zimbabwe, Malawi e Zâmbia) e especialização em cargas anormais.',
    descEN: 'Official entry into primary SADC trade corridors (Zimbabwe, Malawi, and Zambia) and specializing in abnormal oversized loads.',
    iconType: 'expansion'
  },
  {
    year: '2012',
    titlePT: 'Modernização e Credenciamento',
    titleEN: 'Fleet Consolidation & Licensing',
    descPT: 'Expansão para mais de 140 unidades de frota pesada própria e certificação alfandegária como Operador de Trânsito Autorizado.',
    descEN: 'Modernization to over 140 dedicated heavy fleet units and official customs clearance licensing as an Authorized Transit Operator.',
    iconType: 'fleet'
  },
  {
    year: '2026',
    titlePT: 'Hub Beira e Inovação',
    titleEN: 'Tech Leadership & Beira Hub',
    descPT: 'Liderança logística a partir do Porto da Beira, com operação integrada com monitorização por satélite 24/7 e desalfandegamento expresso.',
    descEN: 'Logistics leadership operating out of the Beira Port Hub with integrated 24/7 satellite telemetry and express customs clearing.',
    iconType: 'present'
  }
];

export default function TimelineSection({ language }: TimelineSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside this specific section to animate the vertical progress line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  });

  // Grow the height of the colored progress line as user scrolls down
  const scaleY = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

  const renderIcon = (type: Milestone['iconType']) => {
    switch (type) {
      case 'foundation':
        return <Calendar className="w-5 h-5 text-brand-yellow" />;
      case 'expansion':
        return <TrendingUp className="w-5 h-5 text-brand-yellow" />;
      case 'fleet':
        return <Award className="w-5 h-5 text-brand-yellow" />;
      case 'present':
        return <Star className="w-5 h-5 text-brand-yellow animate-pulse" />;
    }
  };

  return (
    <section 
      id="jornada-section" 
      ref={sectionRef} 
      className="pt-24 pb-6 md:py-24 bg-white relative overflow-hidden border-t border-b border-slate-100"
    >
      {/* Absolute subtle background geometric watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#1E2229_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          {/* SUBTÍTULO: Fade-in suave */}
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] block mb-2"
          >
            {language === 'PT' ? '// A NOSSA JORNADA' : '// OUR HISTORY & HERITAGE'}
          </motion.span>

          {/* TÍTULO: Kinetic Blur-In Stagger */}
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mt-2 mb-4 leading-tight flex flex-wrap gap-x-3 justify-center lg:justify-start uppercase">
            {(language === 'PT' ? 'Quatro Décadas de História e Solidez' : 'Four Decades of Solid History').split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* DESCRIÇÃO: Fade-in suave */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-slate-500 max-w-3xl font-light leading-relaxed mx-auto lg:mx-0"
          >
            {language === 'PT'
              ? 'Uma trajectória marcada por investimentos estratégicos, superação logística regional e compromisso inabalável com o comércio da África Austral.'
              : 'A trajectory marked by strategic investments, outstanding regional logistics performance, and unwavering commitment to Southern African trade.'}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-16">
          
          {/* Base Background Gray Line (Hidden on tiny mobile screens) */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[3px] bg-slate-100 -translate-x-1/2 hidden sm:block" />

          {/* Dynamic Glowing Yellow Scroll Progress Line */}
          <motion.div 
            style={{ 
              scaleY, 
              originY: 0 
            }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[3px] bg-brand-yellow -translate-x-1/2 origin-top hidden sm:block shadow-[0_0_10px_rgba(245,158,11,0.3)]"
          />

          {/* Milestones Stack */}
          <div className="space-y-16 lg:space-y-24">
            {MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const title = language === 'PT' ? milestone.titlePT : milestone.titleEN;
              const desc = language === 'PT' ? milestone.descPT : milestone.descEN;

              return (
                <div 
                  key={milestone.year} 
                  className="flex flex-col lg:flex-row items-stretch relative"
                >
                  
                  {/* Timeline Node Badge Icon (Absolutely centered on large screens) */}
                  <div className="absolute left-4 lg:left-1/2 top-2 lg:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border-[3px] border-white shadow-md">
                    {renderIcon(milestone.iconType)}
                  </div>

                  {/* Left Side (Displays year or card based on index parity) */}
                  <div className={`w-full lg:w-1/2 pl-12 sm:pl-16 flex flex-col justify-center ${
                    isEven 
                      ? 'lg:pl-0 lg:pr-16 lg:items-end lg:text-right' 
                      : 'lg:order-2 lg:pl-16 lg:pr-0 lg:items-start lg:text-left'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                      className="inline-block"
                    >
                      <span className="font-display font-black text-5xl md:text-6xl text-brand-dark/15 tracking-tighter leading-none select-none block">
                        {milestone.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Side (Displays card or empty placeholder) */}
                  <div className={`w-full lg:w-1/2 pl-12 sm:pl-16 flex flex-col justify-center ${
                    isEven 
                      ? 'lg:order-2 lg:pl-16 lg:pr-0 lg:items-start' 
                      : 'lg:pl-0 lg:pr-16 lg:items-end'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                      className="@container w-full max-w-[520px] bg-slate-50 border border-slate-100 rounded-[28px] p-6 md:p-8 hover:shadow-lg transition-all duration-300 group relative"
                    >
                      {/* Interactive subtle corner accent */}
                      <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-[28px] border-t-2 border-r-2 border-transparent group-hover:border-brand-yellow transition-all duration-300 pointer-events-none" />

                      <div className="flex items-center gap-2 mb-3 lg:hidden">
                        <span className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                          {renderIcon(milestone.iconType)}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-black text-brand-dark leading-tight mb-3">
                        {title}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                        {desc}
                      </p>

                      {/* Small SADC compliant bullet */}
                      <div className="mt-5 flex items-center gap-2 text-[11px] font-mono font-bold text-slate-400">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow" />
                        <span>{language === 'PT' ? 'Marco Operacional MGI' : 'MGI Operational Milestone'}</span>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
