import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqSectionProps {
  language: Language;
}

interface FaqItemData {
  id: string;
  qPT: string;
  qEN: string;
  aPT: string;
  aEN: string;
}

const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'faq-1',
    qPT: 'A MGI realiza transporte de mercadorias perigosas (Hazmat)?',
    qEN: 'Does MGI transport hazardous materials (Hazmat)?',
    aPT: 'Sim. A nossa frota de cisternas e os nossos motoristas estão totalmente certificados e equipados para o transporte seguro de combustíveis e granéis líquidos pelos principais corredores regionais.',
    aEN: 'Yes. Our tanker fleet and professional drivers are fully certified and equipped for the safe transport of fuels and liquid bulk across major regional corridors.'
  },
  {
    id: 'faq-2',
    qPT: 'Como funciona a logística para Cargas Anormais (Abnormal Loads)?',
    qEN: 'How does logistics for Abnormal/Oversized Loads work?',
    aPT: 'Dispomos de uma equipa interna de engenharia logística dedicada ao planeamento de rotas, avaliação de pontes e gestão de batedores e escoltas oficiais certificados, operando com atrelados especiais de cama baixa (Lowbeds) até 85 toneladas.',
    aEN: 'We have an in-house logistics engineering team dedicated to route planning, bridge feasibility assessments, and certified escort/patrol management, operating with special lowbed trailers up to 85 tons.'
  },
  {
    id: 'faq-3',
    qPT: 'Quais são os prazos médios de trânsito a partir do Porto da Beira?',
    qEN: 'What are the average transit times from the Beira Port?',
    aPT: 'Os prazos variam consoante o destino e trâmites aduaneiros, mas operamos com uma média ultra-competitiva de trânsito célere (ex: Beira para Harare em aproximadamente 11 horas), apoiados pelo selo de Operador de Trânsito Autorizado SADC.',
    aEN: 'Times vary by destination and customs procedures, but we operate with highly competitive swift transit times (e.g., Beira to Harare in approx 11 hours), supported by our SADC Authorized Transit Operator status.'
  },
  {
    id: 'faq-4',
    qPT: 'A carga possui cobertura de seguro durante o trajeto?',
    qEN: 'Is the cargo covered by insurance during transit?',
    aPT: 'Sim, todas as operações de transporte da MGI estão cobertas por apólices de seguro de carga abrangentes, garantindo total segurança e mitigação de riscos desde a recolha no porto até ao destino final.',
    aEN: 'Yes, all MGI transport operations are covered by comprehensive cargo insurance policies, ensuring total safety and risk mitigation from port collection to the final destination.'
  }
];

const FaqItem: React.FC<{
  item: FaqItemData;
  language: Language;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, language, isOpen, onToggle }) => {
  const question = language === 'PT' ? item.qPT : item.qEN;
  const answer = language === 'PT' ? item.aPT : item.aEN;

  return (
    <div 
      className={`border transition-all duration-300 rounded-2xl bg-white overflow-hidden ${
        isOpen 
          ? 'border-brand-yellow shadow-md shadow-brand-yellow/5' 
          : 'border-slate-100 hover:border-slate-200 hover:shadow-xs'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-display font-black text-brand-dark text-sm md:text-base leading-snug group-hover:text-brand-yellow transition-colors duration-200">
          {question}
        </span>
        
        {/* Animated Chevron Indicator */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
            isOpen 
              ? 'bg-brand-yellow/10 border-brand-yellow text-brand-yellow' 
              : 'bg-slate-50 border-slate-100 text-slate-400'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Content wrapper with smooth height animations */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/30">
              <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                {answer}
              </p>
              
              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                <span>{language === 'PT' ? 'Informação de Suporte MGI' : 'MGI Commercial Support'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqSection({ language }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="pt-6 pb-10 md:py-24 bg-slate-50/30 border-b border-slate-100 relative">
      {/* Background Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#1E2229_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* SUBTÍTULO: Opacidade gradual */}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] block mb-2"
          >
            {language === 'PT' ? '// DÚVIDAS COMERCIAIS' : '// COMMERCIAL SUPPORT'}
          </motion.span>

          {/* TÍTULO PRINCIPAL: Máscara Tipográfica Slide-up */}
          <div className="overflow-hidden py-1">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
              className="text-3xl md:text-4xl font-display font-black text-brand-dark tracking-tight uppercase"
            >
              {language === 'PT' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
            </motion.h2>
          </div>

          {/* DESCRIÇÃO: Fade-in suave */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-slate-500 font-light text-sm md:text-base max-w-xl mx-auto"
          >
            {language === 'PT'
              ? 'Esclareça as dúvidas mais comuns sobre as nossas soluções de transporte pesado e suporte aduaneiro regional.'
              : 'Clear up common questions about our heavy haulage solutions and regional custom services.'}
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              language={language}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        {/* Direct contact hint */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand-yellow" />
            <span>
              {language === 'PT'
                ? 'Ainda tem dúvidas? Fale diretamente com a nossa equipa de operações no formulário abaixo.'
                : 'Still have questions? Chat directly with our operations team in the form below.'}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
