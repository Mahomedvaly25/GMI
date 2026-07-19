import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, User, PhoneCall, FileText } from 'lucide-react';

interface CommercialContactProps {
  language: Language;
}

// Configurable Contact Data (Easy to maintain via ISR or CMS props)
const CONTACT_INFO = {
  email: 'Mgilda2014@gmail.com',
  phones: [
    { display: '+258 84 501 9240', link: 'tel:+258845019240' },
    { display: '+258 87 501 9240', link: 'tel:+258875019240' }
  ],
  address: 'Avenida Samora Machel, Beira, Moçambique.'
};

export default function CommercialContact({ language }: CommercialContactProps) {
  // Form state
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim() || !company.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError(
        language === 'PT'
          ? 'Por favor, preencha todos os campos obrigatórios.'
          : 'Please fill in all required fields.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API request/lead transmission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      // Reset form
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      setError(
        language === 'PT'
          ? 'Erro ao enviar mensagem. Por favor, tente novamente.'
          : 'Error sending message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
      
      {/* Subtle clean grid overlay background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1E2229_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic scroll-triggered wrapper container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* Section Heading */}
          <div className="mb-16">
            {/* SUBTÍTULO: Escala progressiva */}
            <motion.span 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-brand-yellow font-mono font-bold text-xs uppercase tracking-[3px] inline-block mb-2"
            >
              {language === 'PT' ? '// FALE CONNOSCO' : '// GET IN TOUCH'}
            </motion.span>

            {/* TÍTULO PRINCIPAL: Overshoot Spring */}
            <div className="overflow-hidden py-1">
              <motion.h2 
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 14, stiffness: 80, mass: 0.8 }}
                className="text-4xl font-display font-black text-brand-dark md:text-5xl tracking-tight uppercase"
              >
                {language === 'PT' ? 'Contacto Comercial' : 'Commercial Contact'}
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-16 h-1 bg-brand-yellow mt-4 rounded-full origin-left"
            />
          </div>

          {/* Grid Layout: 2 Columns (1/3 Institutional Info, 2/3 Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            
            {/* COLUMN 1: Institutional Info & Official Configurable Contacts */}
            <div className="bg-slate-50 border border-slate-100/80 rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-xs relative overflow-hidden">
              
              {/* Background watermark for premium tech aesthetic */}
              <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-brand-dark pointer-events-none select-none w-48 h-48">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V8l8,5l8,-5V18z M12,11L4,6h16L12,11z" />
                </svg>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase bg-white/80 border border-slate-200/50 px-3 py-1 rounded-full">
                  {language === 'PT' ? 'INFORMAÇÃO OFICIAL' : 'OFFICIAL DETAILS'}
                </span>
                
                <h3 className="text-2xl font-display font-black text-brand-dark mt-6 mb-4">
                  MGI Lda. Beira Hub
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8">
                  {language === 'PT'
                    ? 'Conectamos a sua carga aos principais eixos de desenvolvimento e corredores comerciais da África Austral com segurança, rapidez e conformidade aduaneira integral.'
                    : 'We secure your cargo across the primary development axes and commercial corridors of Southern Africa with maximum speed and total customs compliance.'}
                </p>

                {/* Stacks of configurable details */}
                <div className="space-y-6">
                  
                  {/* Email block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {language === 'PT' ? 'E-mail Oficial' : 'Official E-mail'}
                      </span>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`} 
                        className="text-sm font-semibold text-brand-dark hover:text-brand-yellow transition-colors duration-200 font-mono"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Phones block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {language === 'PT' ? 'Telefones de Suporte' : 'Hotline Support'}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {CONTACT_INFO.phones.map((phone, i) => (
                          <a 
                            key={i}
                            href={phone.link}
                            className="text-sm font-semibold text-brand-dark hover:text-brand-yellow transition-colors duration-200 font-mono"
                          >
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Address block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {language === 'PT' ? 'Endereço Corporativo' : 'Corporate Address'}
                      </span>
                      <span className="text-sm font-semibold text-brand-dark block font-display leading-tight">
                        {CONTACT_INFO.address}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Operations Banner */}
              <div className="mt-12 pt-6 border-t border-slate-200/60 text-xs font-mono text-slate-400">
                <p className="flex items-center gap-2 font-semibold text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  {language === 'PT' ? 'Resposta em menos de 2h' : 'Response under 2 hours'}
                </p>
                <p className="mt-1 font-light">
                  {language === 'PT' ? 'Dpto. de Despacho Aduaneiro Beira' : 'Beira Customs Operations Hub'}
                </p>
              </div>

            </div>

            {/* COLUMNS 2 & 3: Quotation & Commercial Leads Form */}
            <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-lg shadow-slate-100/50 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form-contact"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    id="commercial-leads-form"
                  >
                    <div>
                      <h3 className="text-xl font-display font-extrabold text-brand-dark">
                        {language === 'PT' ? 'Solicitar Cotação ou Informações' : 'Request Freight Quote / Info'}
                      </h3>
                      <p className="text-xs text-slate-400 font-light mt-1">
                        {language === 'PT'
                          ? 'Preencha o formulário para obter um estudo de viabilidade, prazos e orçamento direto para o seu frete.'
                          : 'Fill in the details below to receive a feasibility study, times, and direct pricing for your shipment.'}
                      </p>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Name field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {language === 'PT' ? 'Nome Completo *' : 'Full Name *'}
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder={language === 'PT' ? 'ex: Mahomed Valy' : 'ex: John Doe'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Company field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {language === 'PT' ? 'Empresa / Organização *' : 'Company / Organization *'}
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder={language === 'PT' ? 'Nome da sua empresa' : 'Your company name'}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Email field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {language === 'PT' ? 'E-mail Corporativo *' : 'Corporate E-mail *'}
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            required
                            placeholder="exemplo@empresa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Phone field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {language === 'PT' ? 'Telefone / WhatsApp *' : 'Phone / WhatsApp *'}
                        </label>
                        <div className="relative">
                          <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+258 84..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Message / Cargo Details block */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'PT' ? 'Mensagem & Detalhes da Carga *' : 'Message & Cargo Details *'}
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-4 w-4 h-4 text-slate-400" />
                        <textarea
                          required
                          rows={4}
                          placeholder={
                            language === 'PT'
                              ? 'Descreva a rota desejada, peso estimado, tipo de mercadoria e se necessita de desalfandegamento.'
                              : 'Describe the desired route, estimated weight, type of cargo, and if you require customs clearing services.'
                          }
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Form level error validation */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}

                    {/* GIANT SUBMIT BUTTON with elegant hover */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="w-full cursor-pointer bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-display font-extrabold text-sm md:text-base py-4 px-6 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-3 border border-brand-yellow uppercase tracking-widest disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{language === 'PT' ? 'Enviar Pedido de Cotação' : 'Submit Quotation Request'}</span>
                          <Send className="w-4 h-4 transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5" />
                        </>
                      )}
                    </motion.button>

                  </motion.form>
                ) : (
                  // Elegant Success Message
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-black text-brand-dark uppercase">
                      {language === 'PT' ? 'Pedido Recebido com Sucesso!' : 'Quotation Request Received!'}
                    </h3>
                    
                    <p className="text-sm text-slate-500 max-w-md mt-3 leading-relaxed font-light">
                      {language === 'PT'
                        ? 'Agradecemos o seu contacto comercial. A nossa equipa de despacho e logística do Porto da Beira já está a analisar as especificações da sua carga e responderá nas próximas duas horas.'
                        : 'Thank you for contacting our commercial team. Our logistics and customs dispatch desk at the Port of Beira is reviewing your cargo metrics and will respond within two hours.'}
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      {language === 'PT' ? 'Enviar Novo Pedido' : 'Send Another Request'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
