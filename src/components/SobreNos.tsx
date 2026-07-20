"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface SobreNosProps {
  language: Language;
}

export default function SobreNos({ language }: SobreNosProps) {
  return (
    <section id="sobre" className="relative w-full py-16 md:py-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda (Conteúdo Institucional) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Pré-título pequeno em dourado */}
            <span className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] block mb-2">
              {language === 'PT' ? '// SOBRE NÓS' : '// ABOUT US'}
            </span>

            {/* Título Principal H2 */}
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-dark tracking-tight uppercase leading-tight mb-6">
              {language === 'PT' 
                ? 'Líderes em Soluções Logísticas Integradas na Região SADC' 
                : 'Leaders in Integrated Logistics Solutions Across the SADC Region'}
            </h2>

            {/* Parágrafos de texto bem estruturados */}
            <div className="space-y-4 text-slate-600 font-light text-base md:text-lg leading-relaxed">
              <p>
                {language === 'PT'
                  ? 'Com mais de 40 anos de sólida atuação no mercado da África Austral, a MGI Lda. consolida-se como referência de excelência operacional no transporte de cargas gerais, combustíveis, líquidos perigosos e equipamentos industriais sobredimensionados.'
                  : 'With over 40 years of solid operation in the Southern African market, MGI Lda. stands out as an operational benchmark in the transport of general cargo, fuels, hazardous liquids, and oversized industrial equipment.'}
              </p>

              <p>
                {language === 'PT'
                  ? 'A partir dos portos estratégicos de Moçambique — Maputo, Beira e Nacala —, garantimos ligações intermodais seguras e eficientes ao longo dos principais corredores de trânsito regional, com uma frota pesada 100% monitorizada por telemetria via satélite 24/7.'
                  : 'Operating from Mozambique’s strategic ports — Maputo, Beira, and Nacala —, we ensure secure and efficient intermodal connections along key regional transit corridors, backed by a heavy fleet 24/7 tracked via satellite telemetry.'}
              </p>

              <p>
                {language === 'PT'
                  ? 'O nosso compromisso inabalável assenta no rigor técnico, no cumprimento rigoroso das normas regulamentares SADC (Hazmat) e no respeito absoluto pelos prazos e pela integridade das mercadorias de cada cliente.'
                  : 'Our unwavering commitment is built on technical rigor, strict compliance with SADC regulatory standards (Hazmat), and absolute respect for delivery timelines and cargo integrity.'}
              </p>
            </div>

            {/* Indicadores / Métricas Rápidas */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200/80">
              <div>
                <div className="text-2xl md:text-3xl font-display font-black text-brand-dark">40+</div>
                <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                  {language === 'PT' ? 'Anos de História' : 'Years Experience'}
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-display font-black text-brand-dark">140+</div>
                <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                  {language === 'PT' ? 'Unidades de Frota' : 'Fleet Units'}
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-display font-black text-brand-dark">100%</div>
                <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                  {language === 'PT' ? 'Rastreio Satelital' : 'Satellite Tracking'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita (Fotografia Operacional Original) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[450px] md:h-[520px] group border border-slate-100">
              <img
                src="/assets/sobre-nos.jpg"
                alt="MGI Lda. - Equipa e Frota Operacional"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle visual gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
