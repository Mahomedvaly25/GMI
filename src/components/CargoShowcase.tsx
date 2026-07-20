import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Truck, ShieldCheck, ArrowRight, Eye, Layers, X } from 'lucide-react';

interface CargoShowcaseProps {
  language: Language;
}

type CategoryType = 'all' | 'abnormal' | 'general' | 'fuels' | 'rent';

interface ShowcaseItem {
  id: string;
  category: Exclude<CategoryType, 'all'>;
  titlePT: string;
  titleEN: string;
  subtitlePT: string;
  subtitleEN: string;
  imageSrc: string;
  badgePT: string;
  badgeEN: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'gallery-tonly-dumper',
    category: 'abnormal',
    titlePT: 'Transporte de Dumper Mineiro Tonly',
    titleEN: 'Tonly Mining Dumper Transport',
    subtitlePT: 'Operação Lowbed – Corredor de Tete',
    subtitleEN: 'Lowbed Operation – Tete Corridor',
    imageSrc: '/assets/galeria-tonly-lowbed.jpg',
    badgePT: 'Cargas Anormais',
    badgeEN: 'Abnormal Loads'
  },
  {
    id: 'gallery-mgi-escort-convoy',
    category: 'abnormal',
    titlePT: 'Logística Integrada e Escolta Certificada',
    titleEN: 'Integrated Logistics & Certified Escort',
    subtitlePT: 'Comboio de Cargas Especiais – Moçambique',
    subtitleEN: 'Special Cargo Convoy – Mozambique',
    imageSrc: '/assets/galeria-escolta-mgi.jpg',
    badgePT: 'Cargas Anormais',
    badgeEN: 'Abnormal Loads'
  },
  {
    id: 'gallery-mgi-faw-tonly-double',
    category: 'abnormal',
    titlePT: 'Transporte Multi-Unidade de Dumpers Minerais',
    titleEN: 'Multi-Unit Mining Dumper Transport',
    subtitlePT: 'Operação de Alta Complexidade – Corredores Logísticos',
    subtitleEN: 'High-Complexity Operation – Logistics Corridors',
    imageSrc: '/assets/galeria-faw-tonly-double.jpg',
    badgePT: 'Cargas Anormais',
    badgeEN: 'Abnormal Loads'
  },
  {
    id: 'gallery-mgi-highway-convoy',
    category: 'abnormal',
    titlePT: 'Escolta e Especificações de Comboios Logísticos',
    titleEN: 'Escort & Logistics Convoy Specifications',
    subtitlePT: 'Transporte Transfronteiriço de Grande Porte – Corredores Regionais',
    subtitleEN: 'Large-Scale Cross-Border Transport – Regional Corridors',
    imageSrc: '/assets/galeria-comboio-autoestrada.jpg',
    badgePT: 'Cargas Anormais',
    badgeEN: 'Abnormal Loads'
  },
  {
    id: 'gallery-mgi-fuel-tanker',
    category: 'fuels',
    titlePT: 'Distribuição de Produtos Petrolíferos',
    titleEN: 'Petroleum Products Distribution',
    subtitlePT: 'Logística Especializada Hazmat – Rotas Regionais',
    subtitleEN: 'Hazmat Specialized Logistics – Regional Routes',
    imageSrc: '/assets/galeria-cisterna-combustivel.jpg',
    badgePT: 'Combustíveis',
    badgeEN: 'Fuels & Tankers'
  },
  {
    id: 'gallery-mgi-faw-sany-fleet',
    category: 'rent',
    titlePT: 'Mobilização de Equipamento Pesado Intermodal',
    titleEN: 'Heavy Intermodal Equipment Mobilization',
    subtitlePT: 'Suporte Logístico a Projetos de Infraestrutura e Mineração',
    subtitleEN: 'Logistics Support for Infrastructure & Mining Projects',
    imageSrc: '/assets/galeria-frota-faw-sany.jpg',
    badgePT: 'Aluguer de Máquinas',
    badgeEN: 'Equipment Rental'
  },
  {
    id: 'gallery-mgi-foton-night',
    category: 'rent',
    titlePT: 'Disponibilidade Operacional 24/7',
    titleEN: '24/7 Operational Availability',
    subtitlePT: 'Frota Pesada de Alta Performance para Projetos Estratégicos',
    subtitleEN: 'Heavy Duty High-Performance Fleet for Strategic Projects',
    imageSrc: '/assets/galeria-foton-noturno.jpg',
    badgePT: 'Aluguer de Máquinas',
    badgeEN: 'Equipment Rental'
  },
  {
    id: 'gallery-mgi-general-cargo',
    category: 'general',
    titlePT: 'Transporte Seguro de Carga Geral Convencional',
    titleEN: 'Secure Conventional General Cargo Transport',
    subtitlePT: 'Logística de Distribuição – Corredores Nacionais',
    subtitleEN: 'Distribution Logistics – National Corridors',
    imageSrc: '/assets/galeria-carga-geral-lona.jpg',
    badgePT: 'Carga Geral',
    badgeEN: 'General Cargo'
  },
  {
    id: 'gallery-mgi-general-cargo-faw',
    category: 'general',
    titlePT: 'Logística de Carga Paletizada e Industrial',
    titleEN: 'Palletized & Industrial Cargo Logistics',
    subtitlePT: 'Transporte de Equipamentos e Insumos – Distribuição SADC',
    subtitleEN: 'Equipment & Supplies Transport – SADC Distribution',
    imageSrc: '/assets/galeria-carga-geral-faw.jpg',
    badgePT: 'Carga Geral',
    badgeEN: 'General Cargo'
  },
  {
    id: 'gallery-mgi-general-cargo-structures',
    category: 'general',
    titlePT: 'Transporte de Estruturas e Componentes Industriais',
    titleEN: 'Industrial Structures & Components Transport',
    subtitlePT: 'Logística de Suporte ao Setor Fabril e de Construção',
    subtitleEN: 'Logistics Support for Manufacturing & Construction Sectors',
    imageSrc: '/assets/galeria-carga-geral-estruturas.jpg',
    badgePT: 'Carga Geral',
    badgeEN: 'General Cargo'
  },

  {
    id: 'item-7',
    category: 'rent',
    titlePT: 'Aluguer de Escavadoras de Grande Porte',
    titleEN: 'Heavy-Duty Excavator Rental',
    subtitlePT: 'Operações de Mineração e Infraestruturas',
    subtitleEN: 'Mining & Infrastructure Operations',
    imageSrc: '/assets/sany-excavator.jpg',
    badgePT: 'Aluguer de Máquinas',
    badgeEN: 'Equipment Rental'
  },
  {
    id: 'item-8',
    category: 'rent',
    titlePT: 'Frota de Camiões Fora-de-Estrada',
    titleEN: 'Off-Road Dump Truck Fleet',
    subtitlePT: 'Movimentação de Terras e Terraplanagem',
    subtitleEN: 'Earthmoving & Land Grading',
    imageSrc: '/assets/tonly-truck.jpg',
    badgePT: 'Aluguer de Máquinas',
    badgeEN: 'Equipment Rental'
  },

];

export default function CargoShowcase({ language }: CargoShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayItems, setDisplayItems] = useState<ShowcaseItem[]>([]);

  useEffect(() => {
    // Algoritmo Fisher-Yates para baralhar o array sem mutar o original
    const shuffleArray = (array: ShowcaseItem[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setDisplayItems(shuffleArray(SHOWCASE_ITEMS));
  }, []);

  const filteredItems = activeFilter === 'all' 
    ? displayItems 
    : displayItems.filter(item => item.category === activeFilter);

  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);

  const filters = [
    { type: 'all' as CategoryType, pt: 'Todos', en: 'All Cargoes' },
    { type: 'abnormal' as CategoryType, pt: 'Cargas Anormais', en: 'Abnormal Loads' },
    { type: 'general' as CategoryType, pt: 'Carga Geral', en: 'General Cargo' },
    { type: 'fuels' as CategoryType, pt: 'Combustíveis', en: 'Fuels & Tankers' },
    { type: 'rent' as CategoryType, pt: 'Aluguer de Máquinas', en: 'Equipment Rental' }
  ];

  return (
    <section id="portfolio-section" className="pt-6 pb-12 md:py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      {/* Background grids watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#1E2229_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with consistent styling */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-center lg:text-left">
            {/* SUBTÍTULO: Fade-in elástico da esquerda */}
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] block mb-2"
            >
              {language === 'PT' ? '// PORTFÓLIO OPERACIONAL' : '// OPERATIONAL SHOWCASE'}
            </motion.span>

            {/* TÍTULO PRINCIPAL: Tracking Focus Reveal */}
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "-0.05em", filter: "blur(8px)" }}
              whileInView={{ opacity: 1, letterSpacing: "0px", filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-3xl md:text-4xl font-display font-black text-brand-dark tracking-tight uppercase"
            >
              {language === 'PT' ? 'A Nossa Frota em Ação' : 'Our Heavy Fleet in Action'}
            </motion.h2>

            {/* DESCRIÇÃO: Fade-in suave */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 text-slate-500 font-light text-sm md:text-base max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
            >
              {language === 'PT'
                ? 'Visualização em tempo real das nossas soluções pesadas cruzando os principais eixos aduaneiros e corredores industriais da África Austral.'
                : 'Real-world glimpse of our heavy haulage solutions traversing the major custom axes and industrial corridors of Southern Africa.'}
            </motion.p>
          </div>

          {/* SADC Secure Badge */}
          <div className="flex items-center gap-3 self-center lg:self-end px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
            <ShieldCheck className="w-5 h-5 text-brand-yellow" />
            <div className="text-left font-mono">
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-wider">
                {language === 'PT' ? 'Rastreio Ativo' : 'Active Tracking'}
              </p>
              <p className="text-[9px] text-slate-400">Beira Gateway Hub 24/7</p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-12">
          {filters.map((filter) => {
            const label = language === 'PT' ? filter.pt : filter.en;
            const isSelected = activeFilter === filter.type;

            return (
              <button
                key={filter.type}
                onClick={() => {
                  setActiveFilter(filter.type);
                  setIsExpanded(false);
                }}
                className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10' 
                    : 'bg-slate-50 text-slate-500 border border-slate-100 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Image Grid using Framer Motion Layout Animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => {
              const title = language === 'PT' ? item.titlePT : item.titleEN;
              const subtitle = language === 'PT' ? item.subtitlePT : item.subtitleEN;
              const badge = language === 'PT' ? item.badgePT : item.badgeEN;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-[360px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 cursor-zoom-in"
                  onClick={() => setSelectedImage(item.imageSrc)}
                >
                  {/* Photo with hover zoom */}
                  <motion.img
                    src={item.imageSrc}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:via-slate-950/50" />

                  {/* Category Pill Top-Left */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-lg bg-brand-yellow text-slate-900 font-mono font-extrabold text-[9px] uppercase tracking-widest shadow-sm">
                      {badge}
                    </span>
                  </div>

                  {/* Bottom Info Details */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-20 text-left">
                    <p className="text-[10px] font-mono font-bold text-brand-yellow/95 uppercase tracking-widest mb-1.5">
                      {subtitle}
                    </p>
                    <h3 className="text-base md:text-lg font-display font-black text-white uppercase leading-tight tracking-tight">
                      {title}
                    </h3>
                    
                    {/* Expand View Action Hover */}
                    <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono font-bold text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{language === 'PT' ? 'FROTA MGI DISPONÍVEL' : 'AVAILABLE MGI FLEET'}</span>
                      <ArrowRight className="w-3 h-3 text-brand-yellow" />
                    </div>
                  </div>

                  {/* Aesthetic Corner Border Decoration on hover */}
                  <div className="absolute inset-4 border border-white/0 rounded-2xl pointer-events-none group-hover:border-white/10 transition-all duration-300" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 text-xs font-mono font-bold tracking-widest text-slate-800 hover:text-white bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-900 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              {isExpanded 
                ? (language === 'PT' ? 'VER MENOS' : 'SEE LESS')
                : (language === 'PT' ? 'VER MAIS FOTOS' : 'SEE MORE PHOTOS')}
            </button>
          </motion.div>
        )}

        {/* Footer Link / Prompt */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-100 rounded-2xl transition-all cursor-pointer group" onClick={() => {
            const el = document.getElementById('contacto');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            <Layers className="w-4 h-4 text-brand-yellow" />
            <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-brand-dark transition-colors">
              {language === 'PT' 
                ? 'Precisa de Transporte Especial? Solicite uma Cotação Dedicada' 
                : 'Need Special Haulage? Request a Dedicated Quotation'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-yellow group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Expanded Image */}
            <motion.img
              src={selectedImage}
              alt={language === 'PT' ? 'Visualização da Frota' : 'Fleet Preview'}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
