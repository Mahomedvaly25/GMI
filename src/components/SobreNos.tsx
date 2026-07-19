"use client";

import { motion } from 'motion/react';
import { Language } from '../types';

interface SobreNosProps {
  language: Language;
}

export default function SobreNos({ language }: SobreNosProps) {
  return (
    <section id="sobre" className="relative w-full py-24 my-12 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda (Narrativa Institucional + Contadores) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            {/* Tag de Sub-branding */}
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
              {language === 'PT' ? '// A NOSSA IDENTIDADE OPERACIONAL' : '// OUR OPERATIONAL IDENTITY'}
            </span>
            
            {/* Título Imponente */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
              {language === 'PT' 
                ? 'Solidez Avançada com Foco Humano e Rigor Técnico'
                : 'Advanced Strength with Human Focus and Technical Rigor'}
            </h2>
            
            {/* Parágrafos de Cópia */}
            <p className="text-base text-slate-600 leading-relaxed mb-6 font-light">
              {language === 'PT'
                ? 'Na MGI, combinamos quatro décadas de resiliência e conhecimento de mercado com infraestrutura pesada de última geração para viabilizar soluções de transporte e terraplanagem de alta complexidade em toda a África Austral.'
                : 'At MGI, we combine four decades of resilience and market knowledge with state-of-the-art heavy infrastructure to enable highly complex transport and earthmoving solutions throughout Southern Africa.'}
            </p>
            
            <p className="text-base text-slate-600 leading-relaxed font-light">
              {language === 'PT'
                ? 'Nossa verdadeira força reside na sinergia entre motoristas altamente qualificados, engenharia logística de precisão e um compromisso inabalável com as normas regionais. Mais do que movimentar cargas, conectamos corredores comerciais com segurança e pontualidade.'
                : 'Our true strength lies in the synergy between highly qualified drivers, precision logistics engineering, and an unwavering commitment to regional standards. More than moving cargo, we connect commercial corridors with safety and timeliness.'}
            </p>

            {/* SUB-GRID DE MÉTRICAS (Abaixo do Texto) */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200">
              {/* Bloco 1 */}
              <div>
                <div className="text-3xl font-black text-slate-900">40+</div>
                <div className="text-xs text-slate-500 mt-1">
                  {language === 'PT' ? 'Anos de História' : 'Years of History'}
                </div>
              </div>

              {/* Bloco 2 */}
              <div>
                <div className="text-3xl font-black text-slate-900">140+</div>
                <div className="text-xs text-slate-500 mt-1">
                  {language === 'PT' ? 'Unidades de Frota' : 'Fleet Units'}
                </div>
              </div>

              {/* Bloco 3 */}
              <div>
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-xs text-slate-500 mt-1">
                  {language === 'PT' ? 'Satelital 24/7' : '24/7 Satellite Tracked'}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Coluna da Direita (Moldura da Nova Imagem) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[450px] md:h-[520px] group">
              <img
                src="/assets/sobre-nos.jpg"
                alt="Equipe e Frota MGI"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle visual gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
