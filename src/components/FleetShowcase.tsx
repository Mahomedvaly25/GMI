import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language } from '../types';
import { ShieldCheck, Zap, Truck, Compass, Settings, AlertCircle, Anchor } from 'lucide-react';

interface FleetShowcaseProps {
  language: Language;
}

interface FleetItem {
  id: string;
  titlePT: string;
  titleEN: string;
  typePT: string;
  typeEN: string;
  descPT: string;
  descEN: string;
  imgUrl: string;
  specsPT: string[];
  specsEN: string[];
  capacityPT: string;
  capacityEN: string;
  brand: string;
}

const FLEET_ITEMS: FleetItem[] = [
  {
    id: 'fleet-1',
    titlePT: 'Scania R480 & Volvo FH16 Super Interlink',
    titleEN: 'Scania R480 & Volvo FH16 Super Interlink',
    typePT: 'Basculantes & Carga Geral (Tautliner)',
    typeEN: 'Side Tippers & Flatbed Tautliners',
    descPT: 'Carretas interlink de última geração optimizadas para transporte de graneis minerais e carga geral ensacada ao longo dos corredores comerciais de Beira e Maputo.',
    descEN: 'Next-generation interlink trailers optimized for bulk mineral transport and general bagged cargo across the Beira and Maputo commercial corridors.',
    imgUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    specsPT: [
      'Configuração Interlink de alta articulação',
      'Lonas reforçadas com cabos de aço anti-corte',
      'Suspensão pneumática auto-ajustável para estradas SADC'
    ],
    specsEN: [
      'High-articulation Interlink layout',
      'Anti-slash steel cable reinforced curtains',
      'Auto-adjusting air suspension for SADC road terrains'
    ],
    capacityPT: 'Até 36 Toneladas Líquidas',
    capacityEN: 'Up to 36 Net Tons Payload',
    brand: 'SCANIA / VOLVO'
  },
  {
    id: 'fleet-2',
    titlePT: 'Cisternas de Combustíveis & Petroquímicos',
    titleEN: 'Fuel & Petrochemical Tanker Fleet',
    typePT: 'Transporte de Líquidos e Perigosos',
    typeEN: 'Liquid & Hazardous Goods Transport',
    descPT: 'Cisternas em aço inoxidável AISI 316 e alumínio, equipadas com sistemas de selagem eletrónica contra contaminação e válvulas de segurança de alta precisão.',
    descEN: 'Premium AISI 316 stainless steel and aluminum liquid tankers equipped with anti-contamination electronic sealing and high-precision safety valves.',
    imgUrl: 'https://images.unsplash.com/photo-1516576111851-a53d746ddc70?auto=format&fit=crop&q=80&w=800',
    specsPT: [
      'Certificação SADC de segurança de perigosos (Hazmat)',
      'Sistemas integrados de purga e recuperação de vapores',
      'Sensores digitais de nível de carga com atualização por GPS'
    ],
    specsEN: [
      'SADC Hazmat safety and transport certified',
      'Integrated vapor recovery and purging systems',
      'Digital cargo level sensors with active GPS telemetry'
    ],
    capacityPT: '45,000 Litros de Capacidade',
    capacityEN: '45,000 Litres Carrying Capacity',
    brand: 'VOLVO FH / SCANIA'
  },
  {
    id: 'fleet-3',
    titlePT: 'Plataformas Lowbeds & Cargas Anormais',
    titleEN: 'Lowbeds & Abnormal Over-dimensional Loads',
    typePT: 'Equipamentos Pesados e Sobredimensionados',
    typeEN: 'Oversize & Heavy Duty Industrial Machinery',
    descPT: 'Atrelados de prancha rebaixada projetados para cargas sobredimensionadas, como equipamentos de mineração pesada, pás eólicas e transformadores elétricos regionais.',
    descEN: 'Heavy duty lowbed platform trailers engineered for oversized cargo, including heavy mining machinery, wind turbine components, and regional transformers.',
    imgUrl: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800',
    specsPT: [
      'Pranchas extensíveis com rampas hidráulicas',
      'Múltiplos eixos direcionais dirigidos por comando sem fios',
      'Acompanhamento batedor oficial MGI em conformidade SADC'
    ],
    specsEN: [
      'Extendable beds with heavy hydraulic ramp setups',
      'Wireless remote controlled multi-steering axles',
      'Official SADC compliant MGI escort vehicle logistics'
    ],
    capacityPT: 'Capacidade até 85 Toneladas',
    capacityEN: 'Payload capacity up to 85 Tons',
    brand: 'MERCEDES AROCS / MAN'
  },
  {
    id: 'fleet-4',
    titlePT: 'Porta-Contentores SADC Fast-Track',
    titleEN: 'SADC Fast-Track Container Carriers',
    typePT: 'Logística Intermodal Express',
    typeEN: 'Express Intermodal Logistics',
    descPT: 'Porta-contentores esqueleto planos ideais para conexão direta navio-estrada a partir dos portos de Beira, Maputo e Nacala com fixação Twistlock reforçada de tripla segurança.',
    descEN: 'Flat skeleton container trailers optimized for direct vessel-to-road transshipment from Mozambique ports with reinforced triple-safety Twistlocks.',
    imgUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    specsPT: [
      'Chassis ligeiros de liga de aço de alta resistência',
      'Pinos Twistlock ajustáveis para contentores de 20 e 40 pés',
      'Sistemas eletrónicos de travagem EBS integrados'
    ],
    specsEN: [
      'High-tensile alloy steel lightweight chassis structure',
      'Adjustable heavy twistlocks for 20ft & 40ft containers',
      'Fully integrated active EBS electronic braking layouts'
    ],
    capacityPT: 'Pares de Contentores de 20\' ou Único 40\'',
    capacityEN: 'Twin 20\' Containers or Single 40\' Unit',
    brand: 'SCANIA R'
  }
];

export default function FleetShowcase({ language }: FleetShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Framer Motion useScroll hook setup for desktop vertical-to-horizontal scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef
  });

  // Slide x axis as the user scrolls vertically - translate offset adjusts dynamically
  const xTranslation = isMobile ? '-72%' : '-60%';
  const x = useTransform(scrollYProgress, [0.1, 0.9], ['0%', xTranslation]);

  // Dynamic Marquee phrases based on selected language
  const marqueeItems = language === 'PT'
    ? [
        'FROTA PRÓPRIA',
        'CARGAS ANORMAIS',
        'LOGÍSTICA SADC',
        'RASTREAMENTO VIA SATÉLITE',
        'MONITORIZAÇÃO 24/7',
        'MAIS DE 40 ANOS DE EXPERIÊNCIA'
      ]
    : [
        'OWN COMPLIANT FLEET',
        'ABNORMAL & HEAVY LOADS',
        'SADC CORRIDOR LOGISTICS',
        'SATELLITE TELEMETRY',
        '24/7 ACTIVE DISPATCH',
        'OVER 40 YEARS EXPERIENCE'
      ];

  return (
    <div id="frota" className="bg-[#F8FAFC]">
      
      {/* 1. TOP INFINITE MARQUEE STRIP (High Contrast, Industrial Accent) */}
      <div className="bg-[#1E2229] border-y border-slate-800 py-4.5 overflow-hidden relative select-none z-20">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-loop {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
        `}} />
        
        <div className="animate-marquee-loop flex gap-12 items-center">
          {/* Double list concatenation for a perfect infinite loop */}
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex gap-12 items-center shrink-0">
              {marqueeItems.map((phrase, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-mono font-black tracking-[4px] uppercase whitespace-nowrap text-brand-yellow">
                  <span>{phrase}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN STORYTELLING BLOCK WITH VERTICAL-TO-HORIZONTAL SCROLL EFFECT (Universal Desktop & Mobile) */}
      {/* This element sets up the scroll-locking height container */}
      <div ref={containerRef} className="relative h-[135vh] lg:h-[240vh] bg-white">
        
        {/* Sticky inner viewport frames our layout perfectly */}
        <div className="sticky top-0 h-[75vh] md:h-screen overflow-hidden flex flex-col justify-start lg:justify-between py-6 lg:py-16 gap-3 lg:gap-0">
          
          {/* Top Wrapper to keep header and cards tight on mobile */}
          <div className="flex flex-col lg:flex-1 justify-start gap-4 lg:gap-8 min-h-0 w-full">
            {/* Content Header (Stays anchored at the top) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
              {/* SUBTÍTULO */}
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
                className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] block mb-1"
              >
                {language === 'PT' ? '// FROTA PESADA PRÓPRIA' : '// OUR HEAVY-DUTY EQUIPMENT'}
              </motion.span>

              {/* TÍTULO PRINCIPAL: Kinetic Typography Stagger */}
              <motion.h2 
                variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, margin: "-100px" }}
                className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-brand-dark tracking-tight uppercase leading-none overflow-hidden flex flex-wrap gap-x-2 py-1"
              >
                {(language === 'PT' ? 'Nossa Frota & Capacidade Operacional' : 'Our Fleet & Operational Capacity').split(" ").map((word, index) => (
                  <motion.span 
                    key={index} 
                    variants={{
                      initial: { y: 30, opacity: 0, rotate: 2 },
                      animate: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
                    }} 
                    className="inline-block origin-left"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* DESCRIÇÃO */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-slate-500 font-light text-xs sm:text-sm lg:text-base max-w-3xl mt-2 leading-relaxed"
              >
                {language === 'PT'
                  ? 'Conheça a frota de tração pesada e atrelados especiais MGI. Projetados para máxima segurança nos eixos rodoviários SADC.'
                  : 'Explore our specialized MGI heavy haulage equipment and custom trailer fleets built for primary SADC regional corridors.'}
              </motion.p>
            </div>

            {/* Sliding horizontal container tracking vertical scroll */}
            <div className="w-full overflow-hidden flex items-center py-2 lg:py-4">
              <motion.div
                style={{ x }}
                className="flex gap-4 md:gap-8 pl-[max(1rem,calc((100vw-1280px)/2))] md:pl-[max(2rem,calc((100vw-1280px)/2))] pr-12 md:pr-24"
              >
                {FLEET_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="@container relative w-[80vw] sm:w-[420px] md:w-[480px] shrink-0 bg-slate-50 border border-slate-100 rounded-[28px] md:rounded-[32px] overflow-hidden p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-[68vh] max-h-[380px] sm:max-h-[420px] md:max-h-[460px]"
                    style={{ containerType: 'inline-size' }}
                  >
                    {/* Visual Image Section */}
                    <div className="relative h-[35%] min-h-[110px] sm:h-[160px] md:h-[180px] rounded-2xl overflow-hidden shrink-0">
                      <img
                        src={item.imgUrl}
                        alt={item.titlePT}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                      
                      {/* Floating Brand Badge */}
                      <span className="absolute top-3 left-3 bg-white/95 border border-slate-200 text-brand-dark font-mono font-bold text-[8px] tracking-wider px-2 py-0.5 rounded uppercase">
                        {item.brand}
                      </span>

                      {/* Floating Capacity Info */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="block text-[8px] font-mono tracking-widest text-brand-yellow uppercase font-bold">
                          {language === 'PT' ? 'Capacidade Nominal' : 'Rated Capacity'}
                        </span>
                        <p className="font-display font-extrabold text-xs sm:text-sm md:text-base leading-tight">
                          {language === 'PT' ? item.capacityPT : item.capacityEN}
                        </p>
                      </div>
                    </div>

                    {/* Info Details Section - Styled with v4 container query classes */}
                    <div className="flex-1 mt-4 md:mt-5 flex flex-col justify-between overflow-hidden">
                      <div>
                        <span className="block text-[9px] font-mono font-black text-brand-yellow uppercase tracking-wider">
                          {language === 'PT' ? item.typePT : item.typeEN}
                        </span>
                        <h3 className="text-xs sm:text-sm md:text-lg font-display font-extrabold text-brand-dark leading-tight mt-1 group-hover:text-brand-yellow transition-colors duration-200">
                          {language === 'PT' ? item.titlePT : item.titleEN}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-light mt-1.5 md:mt-2 line-clamp-3 leading-relaxed">
                          {language === 'PT' ? item.descPT : item.descEN}
                        </p>
                      </div>

                      {/* Bullet Points */}
                      <div className="mt-3 md:mt-4 border-t border-slate-200/50 pt-3 md:pt-4 space-y-1 md:space-y-1.5 shrink-0">
                        {(language === 'PT' ? item.specsPT : item.specsEN).map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] md:text-[11px] text-slate-600 font-sans font-medium">
                            <Settings className="w-3 h-3 text-brand-yellow shrink-0 animate-spin-slow" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Indicator Footnote */}
          <div className="mt-4 lg:mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-[10px] md:text-xs font-mono text-slate-400 shrink-0">
            <p className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-yellow animate-pulse" />
              <span>
                {language === 'PT' 
                  ? 'Deslize verticalmente para percorrer a frota horizontal' 
                  : 'Scroll vertically to travel along the fleet deck'}
              </span>
            </p>
            <span className="hidden sm:inline">MGI Heavy Fleet 2026</span>
          </div>

        </div>

      </div>

    </div>
  );
}
