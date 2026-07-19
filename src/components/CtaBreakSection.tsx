import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ArrowRight, PhoneCall, HelpCircle, ShieldCheck } from 'lucide-react';

interface CtaBreakSectionProps {
  language: Language;
}

export default function CtaBreakSection({ language }: CtaBreakSectionProps) {
  // Action to scroll smooth to contact form
  const handleScrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-[#1E2229] overflow-hidden">
      
      {/* Abstract Linear Vector Design Overlay (low-opacity geometric lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        {/* Diagonal corridor lanes */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white transform rotate-12 origin-top-left" />
        <div className="absolute top-12 left-0 w-full h-[2px] bg-white transform rotate-12 origin-top-left" />
        <div className="absolute bottom-16 right-0 w-[80%] h-[2px] bg-brand-yellow transform -rotate-6" />
        
        {/* Geographic coordinate marker grid */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-dashed border-white rounded-full opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-dashed border-white rounded-full opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-6 h-6 border-2 border-white rounded-full opacity-60 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        
        {/* Abstract grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle tag indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-brand-yellow" />
          <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
            {language === 'PT' ? 'Logística Protegida SADC' : 'SADC Secured Logistics'}
          </span>
        </motion.div>

        {/* Catchy headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight leading-tight max-w-4xl mx-auto"
        >
          {language === 'PT' 
            ? 'Pronto para movimentar a sua carga com máxima segurança na África Austral?' 
            : 'Ready to move your cargo with maximum security across Southern Africa?'}
        </motion.h2>

        {/* Paragraph description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {language === 'PT'
            ? 'Fale diretamente com a nossa equipa de operações na Beira e obtenha um estudo de viabilidade e cotação sob medida para a sua logística pesada.'
            : 'Get in touch directly with our operations team in Beira and receive a customized feasibility study and quotation for your heavy logistics.'}
        </motion.p>

        {/* Centered CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={handleScrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-amber-400 text-slate-900 font-mono font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-brand-yellow/10 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>{language === 'PT' ? 'Solicitar Cotação Grátis' : 'Request Free Quote'}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </motion.button>

          {/* Secondary support text link */}
          <button 
            onClick={() => {
              const el = document.getElementById('faq-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3 text-xs font-mono font-bold text-white/70 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4 text-brand-yellow" />
            <span className="underline decoration-brand-yellow/50 underline-offset-4">
              {language === 'PT' ? 'Ver Perguntas Frequentes' : 'Check FAQs'}
            </span>
          </button>
        </motion.div>

        {/* Ambient lower details decoration */}
        <div className="mt-12 flex justify-center items-center gap-8 text-[10px] font-mono text-slate-500">
          <div>Beira Hub: <span className="text-white">+258 84 501 9240</span></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
          <div className="hidden sm:block">Email: <span className="text-white">Mgilda2014@gmail.com</span></div>
        </div>

      </div>

      {/* Modern bottom border divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
