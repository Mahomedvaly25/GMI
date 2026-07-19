import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ShieldAlert, ShieldCheck, Wrench, Users } from 'lucide-react';

interface ComplianceSectionProps {
  language: Language;
}

interface ComplianceItem {
  id: string;
  titlePT: string;
  titleEN: string;
  descPT: string;
  descEN: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COMPLIANCE_ITEMS: ComplianceItem[] = [
  {
    id: 'comp-1',
    titlePT: 'Apólices de Seguro Abrangentes',
    titleEN: 'Comprehensive Insurance Policies',
    descPT: 'Todas as operações e mercadorias transportadas pela MGI estão integralmente cobertas por seguros de carga robustos, garantindo total tranquilidade desde a recolha até ao destino.',
    descEN: 'All shipping operations and cargo transported by MGI are fully covered by robust goods-in-transit insurance, ensuring absolute peace of mind from pickup to final delivery.',
    icon: ShieldCheck,
  },
  {
    id: 'comp-2',
    titlePT: 'Manutenção Preventiva Estrita',
    titleEN: 'Strict Preventive Maintenance',
    descPT: 'Frotas modernas (Scania/Volvo) submetidas a vistorias e manutenções preventivas rigorosas antes de cada viagem, minimizando falhas mecânicas nos corredores regionais.',
    descEN: 'Modern dedicated fleets (Scania/Volvo) undergo rigorous checks and preventative maintenance schedules before every single trip, drastically reducing downtime on regional corridors.',
    icon: Wrench,
  },
  {
    id: 'comp-3',
    titlePT: 'Equipas de Duplos Motoristas',
    titleEN: 'Dual-Driver Crew System',
    descPT: 'Recrutamento rigoroso e treino contínuo de duplas de motoristas para rotas transfronteiriças críticas, assegurando o cumprimento dos tempos de descanso e máxima segurança da carga.',
    descEN: 'Rigorous recruitment and continuous training of double-driver teams for critical cross-border runs, guaranteeing rest times compliance and maximum cargo security.',
    icon: Users,
  },
];

export default function ComplianceSection({ language }: ComplianceSectionProps) {
  // Stagger container definitions
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <section id="seguranca-section" className="pt-6 pb-6 md:py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      {/* Absolute subtle background geometric watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#1E2229_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          {/* SUBTÍTULO: Spring Scale */}
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] inline-block mb-2"
          >
            {language === 'PT' ? '// SEGURANÇA E COMPLIANCE' : '// SAFETY & COMPLIANCE'}
          </motion.span>

          {/* TÍTULO: Kinetic Overshoot Spring Effect */}
          <div className="overflow-hidden py-1">
            <motion.h2 
              initial={{ y: "100%", rotate: 1 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ type: "spring", damping: 14, stiffness: 80, mass: 0.8 }}
              className="text-3xl md:text-4xl font-display font-black text-brand-dark tracking-tight uppercase mt-2 mb-4 leading-tight"
            >
              {language === 'PT' ? 'Compromisso com a Segurança e Padrões SADC' : 'Commitment to Safety & SADC Standards'}
            </motion.h2>
          </div>

          {/* DESCRIÇÃO: Fade-in suave */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-slate-500 font-light text-sm md:text-base max-w-3xl leading-relaxed mx-auto lg:mx-0"
          >
            {language === 'PT'
              ? 'Mitigação rigorosa de riscos operativos e conformidade regulamentar estrita para garantir entregas pontuais, seguras e em total conformidade regional.'
              : 'Rigorous operational risk mitigation and strict regulatory compliance to guarantee on-time, highly secure, and compliant regional deliveries.'}
          </motion.p>
        </div>

        {/* Staggered Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {COMPLIANCE_ITEMS.map((item) => {
            const IconComponent = item.icon;
            const title = language === 'PT' ? item.titlePT : item.titleEN;
            const desc = language === 'PT' ? item.descPT : item.descEN;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="@container relative flex flex-col justify-between p-8 bg-slate-50/40 border border-slate-100 hover:border-slate-200 rounded-[28px] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Decorative absolute corner border */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-[28px] border-t-2 border-r-2 border-transparent group-hover:border-brand-yellow/55 transition-all duration-300 pointer-events-none" />
                
                <div>
                  {/* Brand Yellow Industrial Icon container */}
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-yellow shadow-xs group-hover:bg-slate-900 group-hover:text-brand-yellow transition-all duration-300 mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description with dynamic container sizes */}
                  <h3 className="text-lg font-display font-black text-brand-dark leading-tight uppercase mb-3">
                    {title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* SADC Quality Assurance Tag Footer */}
                <div className="mt-8 pt-5 border-t border-slate-100/80 flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400">
                  <ShieldAlert className="w-4 h-4 text-brand-yellow" />
                  <span>{language === 'PT' ? 'PADRÃO DE OPERAÇÃO ASSEGURADO' : 'ASSURED STANDARD PROCEDURE'}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
