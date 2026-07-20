import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SERVICES } from '../data';
import { Language } from '../types';
import { Truck, ShieldCheck, Settings, ChevronRight } from 'lucide-react';

interface ServicesProps {
  language: Language;
  onNavigateToCalculator: () => void;
}

export default function Services({ language, onNavigateToCalculator }: ServicesProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  // Variantes para o Stagger dos caracteres do Subtítulo
  const letterVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] } }
  };

  const tagContainerVariants = {
    animate: { transition: { staggerChildren: 0.02 } }
  };

  // Variantes para o Título Principal (Palavra por Palavra / Kinetic)
  const titleContainerVariants = {
    animate: { transition: { staggerChildren: 0.05 } }
  };

  const wordVariants = {
    initial: { y: 30, opacity: 0, rotate: 2 },
    animate: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Desktop Parallax: -30% → 30% translation (mais dinâmico)
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  // Mobile Parallax: começa deslocado para cima (-15%) para mostrar o caminhão e desce para +5% no final para cobrir qualquer fresta azul na base
  const yMobile = useTransform(scrollYProgress, [0, 1], ['-15%', '5%']);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-6 h-6 transition-colors duration-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 transition-colors duration-300" />;
      case 'Settings':
        return <Settings className="w-6 h-6 transition-colors duration-300 animate-spin-slow" />;
      default:
        return <Truck className="w-6 h-6 transition-colors duration-300" />;
    }
  };

  return (
    <section
      id="servicos"
      ref={targetRef}
      className="relative w-full min-h-screen pt-24 pb-[55vh] md:py-24 flex flex-col justify-start md:justify-center items-center overflow-hidden bg-[#074796] md:bg-slate-950 border-t border-slate-900"
    >

      {/* ─── BACKGROUND DESKTOP (md+): Parallax com Framer Motion ─────── */}
      <motion.div
        style={{ y }}
        className="hidden md:block absolute w-full h-[150%] -top-[25%] left-0 z-0"
      >
        <img
          src="/assets/GMi.jpg"
          alt="MGI Industrial Services Background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Overlay desktop */}
      <div className="hidden md:block absolute inset-0 bg-slate-900/40 z-10 pointer-events-none" />

      {/* ─── BACKGROUND MOBILE (<md): parallax suave com Framer Motion ── */}
      {/*
        backgroundSize: "100% auto"    → largura total, sem zoom horizontal
        backgroundPosition: "bottom center" → caminhão sempre na base da imagem
        yMobile: -15% → 5%             → imagem desce lentamente, terminando 5% abaixo da base para ocultar frestas
        inset-0                        → tamanho exato da section
      */}
      <motion.div
        className="block md:hidden absolute inset-0 z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/GMi-mobile.webp')",
          backgroundSize: '100% auto',
          backgroundPosition: 'bottom center',
          y: yMobile,
        }}
      />

      {/* Overlay mobile ultra-suave para manter contraste nos cards */}
      <div className="block md:hidden absolute inset-0 bg-slate-900/10 z-10 pointer-events-none" />

      {/* ─── CONTEÚDO (sempre visível z-20) ────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">

        {/* Section Title — text-white com animações cinéticas */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* SUBTÍTULO: Kinetic Character Reveal */}
          <motion.div 
            variants={tagContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, margin: "-100px" }}
            className="inline-flex overflow-hidden text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3"
          >
            {(language === 'PT' ? '// RIGOR OPERACIONAL' : '// OPERATIONAL RIGOR').split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* TÍTULO: Kinetic Word Stagger */}
          <motion.h2 
            variants={titleContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, margin: "-100px" }}
            className="text-3xl md:text-5xl font-black text-white mt-3 mb-4 max-w-3xl mx-auto leading-tight overflow-hidden flex flex-wrap justify-center gap-x-3"
          >
            {(language === 'PT' ? 'Nossos Serviços Industriais' : 'Our Industrial Services').split(" ").map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block origin-left">
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* DESCRIÇÃO: Fade-in suave acoplado */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-200 max-w-2xl mx-auto text-base md:text-lg font-light mt-4 leading-relaxed"
          >
            {language === 'PT'
              ? 'Soluções logísticas e aduaneiras integradas com rigor operacional, segurança de dados e conformidade integral SADC.'
              : 'Integrated logistics and customs solutions with operational rigor, data security, and full SADC compliance.'}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((srv, index) => {
            const title = language === 'PT' ? srv.titlePT : srv.titleEN;
            const desc = language === 'PT' ? srv.descPT : srv.descEN;
            const specs = language === 'PT' ? srv.specsPT : srv.specsEN;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-slate-200/60 overflow-hidden flex flex-col justify-between"
              >
                {/* Yellow Hover Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-yellow/10 rounded-bl-[40px] transform translate-x-4 -translate-y-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />

                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-brand-yellow/10 mb-6 group-hover:bg-brand-yellow text-brand-yellow group-hover:text-brand-dark transition-all duration-300">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {getIcon(srv.iconName)}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark group-hover:text-brand-yellow transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 mt-3 leading-relaxed font-light">
                    {desc}
                  </p>

                  {/* Key Specifications */}
                  <div className="mt-6 pt-6 border-t border-slate-50 space-y-2.5">
                    {specs.map((spec, specIdx) => (
                      <div key={specIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 shrink-0" />
                        <span className="text-xs text-slate-600 font-mono leading-tight">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onNavigateToCalculator}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand-yellow transition-colors duration-200 uppercase tracking-wider cursor-pointer"
                  >
                    <span>{language === 'PT' ? 'Solicitar cotação para este serviço' : 'Request quote for this service'}</span>
                    <ChevronRight className="w-4 h-4 text-brand-yellow" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
