import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Language } from '../types';
import { ShieldCheck, Truck, Clock, Globe } from 'lucide-react';

interface ImpactNumbersSectionProps {
  language: Language;
}

interface MetricItem {
  id: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  labelPT: string;
  labelEN: string;
  icon: React.ComponentType<{ className?: string }>;
}

const METRICS: MetricItem[] = [
  {
    id: 'met-1',
    targetValue: 40,
    prefix: '+',
    labelPT: 'Anos de Experiência no Setor',
    labelEN: 'Years of Sector Experience',
    icon: ShieldCheck,
  },
  {
    id: 'met-2',
    targetValue: 140,
    suffix: '+',
    labelPT: 'Equipamentos e Frota Própria',
    labelEN: 'Heavy Equipment & Fleet Units',
    icon: Truck,
  },
  {
    id: 'met-3',
    targetValue: 100,
    suffix: '%',
    labelPT: 'Cobertura nos Corredores SADC',
    labelEN: 'SADC Corridors Coverage',
    icon: Globe,
  },
  {
    id: 'met-4',
    targetValue: 24, // Will combine manually with /7
    suffix: '/7',
    labelPT: 'Monitorização e Rastreio Satélite',
    labelEN: 'Satellite Tracking & Operations',
    icon: Clock,
  },
];

// Simple component for each counting stat block
const CountingStat: React.FC<{ metric: MetricItem; language: Language }> = ({ metric, language }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = metric.targetValue;
    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, metric.targetValue]);

  const IconComponent = metric.icon;

  return (
    <div
      ref={ref}
      className="@container relative flex flex-col justify-between p-6 md:p-8 bg-white border border-slate-100 rounded-[24px] shadow-xs hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        {/* Fine Industrial Accent Line */}
        <div className="w-1 h-12 bg-brand-yellow/30 rounded-full" />
        
        {/* Subtle Mini Icon */}
        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-yellow transition-colors duration-300">
          <IconComponent className="w-4.5 h-4.5" />
        </div>
      </div>

      <div className="mt-6">
        {/* Container Query-driven Counter Title */}
        <div className="font-display font-black text-brand-dark tracking-tighter leading-none select-none text-[clamp(2.5rem,10cqw,4rem)]">
          {metric.prefix && <span className="text-brand-yellow">{metric.prefix}</span>}
          {count}
          {metric.suffix && <span className="text-brand-yellow">{metric.suffix}</span>}
        </div>

        {/* Muted Label Subtext */}
        <p className="mt-2 text-xs md:text-sm font-sans font-medium text-slate-500 leading-snug">
          {language === 'PT' ? metric.labelPT : metric.labelEN}
        </p>
      </div>

      {/* Decorative tiny corner indicator */}
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
    </div>
  );
}

export default function ImpactNumbersSection({ language }: ImpactNumbersSectionProps) {
  return (
    <section className="py-12 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid configuration with elegant minimal dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((metric) => (
            <CountingStat 
              key={metric.id} 
              metric={metric} 
              language={language} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
