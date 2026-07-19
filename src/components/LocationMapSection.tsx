import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

interface LocationMapSectionProps {
  language: Language;
}

export default function LocationMapSection({ language }: LocationMapSectionProps) {
  // Beira, Moçambique center location coordinates approximate embed url
  // Avenida Samora Machel, Beira
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.1557008399587!2d34.837330775836266!3d-19.83335538153406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f3b3979ea180cb9%3A0xe5db9ca9387a3cb!2sAv.%20Samora%20Machel%2C%20Beira%2C%20Mozambique!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s";

  return (
    <section id="location-section" className="relative w-full bg-slate-50 border-t border-slate-100 overflow-hidden">
      
      {/* Upper Subtle Section Tag for visual rhythm — hidden on mobile to prevent layout collision */}
      <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/60 shadow-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
          <span className="text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest">
            // {language === 'PT' ? 'Porto da Beira Gateway' : 'Beira Port Gateway'}
          </span>
        </div>
      </div>

      <div className="relative w-full h-auto lg:h-[600px] flex flex-col lg:flex-row items-stretch">
        
        {/* Absolute Floating Info Panel (Sede Principal) - Positioned on the left for desk, stacks on mobile */}
        <div className="relative lg:absolute lg:top-12 lg:left-12 lg:z-10 w-full lg:max-w-md bg-white border border-slate-100 lg:shadow-xl lg:rounded-[28px] p-8 shrink-0 flex flex-col justify-between">
          <div>
            <span className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] block mb-2">
              // {language === 'PT' ? 'LOCALIZAÇÃO OFICIAL' : 'OFFICIAL LOCATION'}
            </span>
            <h2 className="text-2xl font-display font-black text-brand-dark tracking-tight uppercase leading-none mb-4">
              {language === 'PT' ? 'Sede Principal' : 'Headquarters'}
            </h2>
            <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed mb-6">
              {language === 'PT'
                ? 'Estrategicamente posicionados na Avenida Samora Machel, oferecendo acesso imediato ao Porto da Beira e aos principais corredores de trânsito transfronteiriço da África Austral.'
                : 'Strategically positioned on Samora Machel Avenue, offering immediate access to the Port of Beira and primary SADC trade corridors.'}
            </p>

            {/* Structured Details Cards */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-yellow shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {language === 'PT' ? 'Endereço' : 'Address'}
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-brand-dark">
                    Av. Samora Machel, Beira, Moçambique
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-yellow shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {language === 'PT' ? 'Horário de Funcionamento' : 'Operating Hours'}
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-brand-dark">
                    {language === 'PT' ? 'Seg - Sex: 07:30 - 17:00' : 'Mon - Fri: 07:30 - 17:00'}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {language === 'PT' ? 'Sábado: Atendimento de Urgência' : 'Saturday: On-call emergency coverage'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-yellow shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {language === 'PT' ? 'Contactos de Operações' : 'Operations Hotline'}
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-brand-dark">
                    +258 84 501 9240
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-left font-mono text-[9px] text-slate-400">
              <span className="font-bold text-brand-dark block">MGI Moçambique Lda.</span>
              <span>NUIT 400194832</span>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Mozambique+Grup+Investiments,+Lda+MGI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-yellow hover:text-slate-900 transition-all shadow-xs"
            >
              <span>{language === 'PT' ? 'Abrir no Maps' : 'Open in Maps'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* High-Contrast Styled Google Maps Embed with Tailwind filter layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full h-[320px] lg:h-full overflow-hidden"
        >
          {/* Custom filters applied through Tailwind classes (grayscale contrast-110 brightness-95) */}
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
            title="MGI Headquarters Map"
            className="w-full h-full grayscale contrast-115 brightness-95 opacity-90 filter hover:grayscale-0 transition-all duration-700"
          />

          {/* Map Overlay Guard - prevents scroll-jacking during normal page scroll */}
          <div className="absolute inset-0 bg-transparent pointer-events-none select-none" />

          {/* Aesthetic Overlay Shadow bottom/top */}
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-slate-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-slate-500/10 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
