import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logótipo Oficial Completo da MGI */}
      <motion.img
        src="/assets/logo-completo-mgi.png"
        alt="MGI Lda. - Carregando..."
        className="w-full max-w-[280px] md:max-w-[320px] h-auto object-contain mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Barra de Progresso Minimalista de Marca */}
      <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-brand-yellow rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
