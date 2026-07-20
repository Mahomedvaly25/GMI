import { Language } from '../types';
import { Mail, Phone, MapPin, ExternalLink, ShieldAlert } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand info */}
          <div className="md:col-span-4 space-y-4">
            <img
              src="/assets/logo-completo-mgi.png"
              alt="MGI Lda. - Transportes e Logística"
              className="w-full max-w-[220px] md:max-w-[250px] h-auto mb-6 object-contain"
            />
            
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              {language === 'PT'
                ? 'Operador logístico e aduaneiro certificado em Moçambique, ligando frotas pesadas ao hinterland da SADC.'
                : 'Certified logistics and customs transit operator in Mozambique, linking heavy-duty road transport to SADC hinterland.'}
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-brand-yellow bg-amber-50 px-3 py-1.5 rounded-lg border border-brand-yellow/10 w-fit">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span>SADC Authorized Transit Operator</span>
            </div>
          </div>

          {/* Core Offices Contacts */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              {language === 'PT' ? 'Sede Principal' : 'Head Office'}
            </h4>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold font-display text-brand-dark">MGI Lda. - Sede</p>
                <p className="text-xs text-slate-500 mt-1">Avenida Samora Machel</p>
                <p className="text-xs text-slate-500">Beira, Moçambique</p>
              </div>
            </div>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              {language === 'PT' ? 'Canais Directos' : 'Direct Contacts'}
            </h4>
            
            <div className="space-y-3">
              <a href="mailto:Mgilda2014@gmail.com" className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-brand-yellow transition-colors group">
                <Mail className="w-4 h-4 text-brand-yellow" />
                <span className="font-mono group-hover:underline">Mgilda2014@gmail.com</span>
              </a>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <a href="tel:+258845019240" className="font-mono hover:underline">+258 84 501 9240</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 shrink-0" />
                  <a href="tel:+258875019240" className="font-mono hover:underline">+258 87 501 9240</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-400">
          <div>
            <p>© {currentYear} Mozambique Group Investments, Lda. (MGI). {language === 'PT' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">NUIT: 400194832 | Conservatória de Registo de Entidades de Moçambique</p>
          </div>
          
          <div className="flex flex-wrap gap-4 font-mono">
            <span className="hover:text-brand-dark cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {language === 'PT' ? 'Início' : 'Home'}
            </span>
            <span className="hover:text-brand-dark cursor-pointer" onClick={() => {
              const el = document.getElementById('servicos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              {language === 'PT' ? 'Serviços' : 'Services'}
            </span>
            <span className="hover:text-brand-dark cursor-pointer" onClick={() => {
              const el = document.getElementById('contacto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              {language === 'PT' ? 'Contacto' : 'Contact'}
            </span>
            <span className="hover:text-brand-dark cursor-pointer">
              {language === 'PT' ? 'Privacidade' : 'Privacy'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
