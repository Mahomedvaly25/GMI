import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Menu, X, Landmark, Globe, ExternalLink, Phone } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navbar({
  language,
  setLanguage,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, smooth: boolean = true) => {
    e.preventDefault();
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    }
    setIsOpen(false);
  };

  const handleMobileScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = targetId.replace('#', '');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const menuItems = [
    {
      labelPT: 'Serviços',
      labelEN: 'Services',
      href: '#servicos',
    },
    {
      labelPT: 'Corredores',
      labelEN: 'Corridors',
      href: '#corredores',
    },
    {
      labelPT: 'Frota',
      labelEN: 'Fleet',
      href: '#frota',
    },
    {
      labelPT: 'Contacto',
      labelEN: 'Contact',
      href: '#contacto',
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-brand-dark overflow-hidden">
              <span className="font-display font-black text-xl text-brand-yellow">M</span>
              <span className="font-display font-black text-xs text-white absolute bottom-1 right-1.5">G</span>
              {/* Highlight edge line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-yellow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg tracking-tight text-brand-dark">MGI</span>
                <span className="text-[10px] font-mono font-bold bg-brand-yellow/15 text-brand-dark px-1.5 py-0.5 rounded-md">LDA</span>
              </div>
              <p className="text-[9px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                Mozambique Group Investments
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href, true)}
                className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors duration-200 cursor-pointer relative py-1.5 group"
              >
                {language === 'PT' ? item.labelPT : item.labelEN}
                {/* Custom sliding underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Language Switch & CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Picker Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              {(['PT', 'EN'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all duration-300 ${
                    language === lang
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-slate-500 hover:text-brand-dark'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Quick Quote CTA */}
            <a
              href="#contacto"
              onClick={(e) => handleScroll(e, '#contacto', false)}
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-display font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm active:scale-95 cursor-pointer flex items-center gap-1.5 border border-brand-yellow"
            >
              <span>{language === 'PT' ? 'Solicitar Cotação' : 'Request Quote'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'PT' ? 'EN' : 'PT')}
              className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-xl"
            >
              <Globe className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{language}</span>
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-slate-600 hover:text-brand-dark hover:bg-slate-50 transition-all focus:outline-none"
              id="hamburger-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleMobileScroll(e, item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-700 hover:text-brand-dark hover:bg-slate-50 rounded-xl transition-all"
                >
                  {language === 'PT' ? item.labelPT : item.labelEN}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="#contacto"
                  onClick={(e) => handleMobileScroll(e, '#contacto')}
                  className="w-full bg-brand-yellow text-brand-dark font-display font-bold text-center py-3 rounded-xl shadow-sm block text-sm cursor-pointer"
                >
                  {language === 'PT' ? 'Solicitar Cotação' : 'Request Quote'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
