import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { MapPin, ArrowRight, Route, Clock, ChevronRight, Globe, Info } from 'lucide-react';

interface RoutesSectionProps {
  language: Language;
  onNavigateToContact: () => void;
}

interface CommercialRoute {
  id: string;
  origin: string;
  originEN: string;
  destination: string;
  destinationEN: string;
  distance: string;
  time: string;
  timeEN: string;
  corridor: string;
  corridorEN: string;
  mapRouteKey: 'beira-harare' | 'beira-lusaka' | 'maputo-joburg' | 'nacala-lilongwe';
}

const COMMERCIAL_ROUTES: CommercialRoute[] = [
  {
    id: 'cr-1',
    origin: 'Porto da Beira',
    originEN: 'Port of Beira',
    destination: 'Harare (Zimbabwe)',
    destinationEN: 'Harare (Zimbabwe)',
    distance: '560 km',
    time: '11 horas',
    timeEN: '11 hours',
    corridor: 'Corredor da Beira',
    corridorEN: 'Beira Corridor',
    mapRouteKey: 'beira-harare'
  },
  {
    id: 'cr-2',
    origin: 'Porto da Beira',
    originEN: 'Port of Beira',
    destination: 'Lusaka (Zâmbia)',
    destinationEN: 'Lusaka (Zambia)',
    distance: '1,050 km',
    time: '22 horas',
    timeEN: '22 hours',
    corridor: 'Corredor Beira-Lusaka',
    corridorEN: 'Beira-Lusaka Corridor',
    mapRouteKey: 'beira-lusaka'
  },
  {
    id: 'cr-3',
    origin: 'Porto de Maputo',
    originEN: 'Port of Maputo',
    destination: 'Joanesburgo (África do Sul)',
    destinationEN: 'Johannesburg (South Africa)',
    distance: '430 km',
    time: '8 horas',
    timeEN: '8 hours',
    corridor: 'Corredor de Maputo',
    corridorEN: 'Maputo Corridor',
    mapRouteKey: 'maputo-joburg'
  },
  {
    id: 'cr-4',
    origin: 'Porto de Nacala',
    originEN: 'Port of Nacala',
    destination: 'Lilongwe (Malawi)',
    destinationEN: 'Lilongwe (Malawi)',
    distance: '980 km',
    time: '20 horas',
    timeEN: '20 hours',
    corridor: 'Corredor de Nacala',
    corridorEN: 'Nacala Corridor',
    mapRouteKey: 'nacala-lilongwe'
  }
];

interface MapNode {
  id: string;
  namePT: string;
  nameEN: string;
  x: number;
  y: number;
  type: 'port' | 'hinterland';
}

const MAP_NODES: MapNode[] = [
  { id: 'node-maputo', namePT: 'Porto de Maputo', nameEN: 'Port of Maputo', x: 380, y: 410, type: 'port' },
  { id: 'node-beira', namePT: 'Porto da Beira', nameEN: 'Port of Beira', x: 390, y: 260, type: 'port' },
  { id: 'node-nacala', namePT: 'Porto de Nacala', nameEN: 'Port of Nacala', x: 480, y: 120, type: 'port' },
  { id: 'node-joburg', namePT: 'Joanesburgo', nameEN: 'Johannesburg', x: 250, y: 420, type: 'hinterland' },
  { id: 'node-harare', namePT: 'Harare', nameEN: 'Harare', x: 310, y: 240, type: 'hinterland' },
  { id: 'node-lusaka', namePT: 'Lusaka', nameEN: 'Lusaka', x: 210, y: 190, type: 'hinterland' },
  { id: 'node-lilongwe', namePT: 'Lilongwe', nameEN: 'Lilongwe', x: 420, y: 100, type: 'hinterland' },
];

export default function RoutesSection({ language, onNavigateToContact }: RoutesSectionProps) {
  const [hoveredRouteKey, setHoveredRouteKey] = useState<string | null>(null);
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(COMMERCIAL_ROUTES[0].id);
  const [hoveredNode, setHoveredNode] = useState<MapNode | null>(null);

  const activeRoute = COMMERCIAL_ROUTES.find(r => r.id === selectedRouteId) || COMMERCIAL_ROUTES[0];
  const activeRouteKey = hoveredRouteKey || activeRoute.mapRouteKey;

  return (
    <section id="corredores" className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alinhamento de Título Comercial */}
        <div className="mb-12">
          {/* SUBTÍTULO: Expansion tracking */}
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "-0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-brand-yellow font-mono font-bold text-xs uppercase block mb-3"
          >
            {language === 'PT' ? '// CONECTIVIDADE TRANSFRONTEIRIÇA' : '// CROSS-BORDER CONNECTIVITY'}
          </motion.span>

          {/* TÍTULO: Tracking Focus Reveal */}
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "-0.05em", filter: "blur(8px)" }}
            whileInView={{ opacity: 1, letterSpacing: "0px", filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="text-3xl md:text-5xl font-black text-brand-dark leading-tight uppercase"
          >
            {language === 'PT' ? 'Nossos Corredores Logísticos' : 'Our Logistical Corridors'}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-slate-500 max-w-3xl font-light leading-relaxed"
          >
            {language === 'PT'
              ? 'A partir do Porto de águas profundas de Moçambique, conectamos a sua mercadoria diretamente ao Hinterland de forma célere e segura, cobrindo os principais eixos de desenvolvimento da África Austral.'
              : 'From the deep-water ports of Mozambique, we connect your goods directly to the Hinterland quickly and securely, covering the primary SADC development axes.'}
          </motion.p>
        </div>

        {/* Layout em 2 Colunas: Mapa Comercial + Lista de Distâncias */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna 1 e 2: O Visualizador do Mapa (Focado apenas na geografia) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            
            {/* Minimalist Grid Pattern Watermark */}
            <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Title / Description Inside the Map Box */}
            <div className="relative z-10 mb-4">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md">
                {language === 'PT' ? 'Mapa de Cobertura SADC' : 'SADC Coverage Map'}
              </span>
            </div>

            {/* SADC Geographic SVG Map */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center">
              <svg
                viewBox="0 0 600 460"
                className="w-full h-full max-h-[380px] select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coastal / Mozambique border dashed line */}
                <path
                  d="M375,440 L380,410 L395,350 L400,310 L390,260 L410,210 L440,165 L480,120 L495,110 L505,80 L490,60"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />

                {/* SADC Transit Corridors - glowing dynamically based on selection/hover */}
                
                {/* Maputo Corridor (Maputo to Joburg) */}
                <line
                  x1="380"
                  y1="410"
                  x2="250"
                  y2="420"
                  stroke={activeRouteKey === 'maputo-joburg' ? '#F59E0B' : '#E2E8F0'}
                  strokeWidth={activeRouteKey === 'maputo-joburg' ? '5' : '2.5'}
                  strokeDasharray={activeRouteKey === 'maputo-joburg' ? 'none' : '5 5'}
                  className="transition-all duration-300"
                />

                {/* Beira to Harare */}
                <line
                  x1="390"
                  y1="260"
                  x2="310"
                  y2="240"
                  stroke={activeRouteKey === 'beira-harare' ? '#F59E0B' : '#E2E8F0'}
                  strokeWidth={activeRouteKey === 'beira-harare' ? '5' : '2.5'}
                  strokeDasharray={activeRouteKey === 'beira-harare' ? 'none' : '5 5'}
                  className="transition-all duration-300"
                />

                {/* Beira to Lusaka */}
                <path
                  d="M 390 260 Q 310 200 210 190"
                  fill="none"
                  stroke={activeRouteKey === 'beira-lusaka' ? '#F59E0B' : '#E2E8F0'}
                  strokeWidth={activeRouteKey === 'beira-lusaka' ? '5' : '2.5'}
                  strokeDasharray={activeRouteKey === 'beira-lusaka' ? 'none' : '5 5'}
                  className="transition-all duration-300"
                />

                {/* Nacala Corridor (Nacala to Lilongwe) */}
                <line
                  x1="480"
                  y1="120"
                  x2="420"
                  y2="100"
                  stroke={activeRouteKey === 'nacala-lilongwe' ? '#F59E0B' : '#E2E8F0'}
                  strokeWidth={activeRouteKey === 'nacala-lilongwe' ? '5' : '2.5'}
                  strokeDasharray={activeRouteKey === 'nacala-lilongwe' ? 'none' : '5 5'}
                  className="transition-all duration-300"
                />

                {/* Pulsing glow particle along the active glowing corridor */}
                {activeRouteKey === 'maputo-joburg' && (
                  <motion.circle
                    cx={0}
                    cy={0}
                    r="6"
                    fill="#F59E0B"
                    animate={{ x: [380, 250], y: [410, 420] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {activeRouteKey === 'beira-harare' && (
                  <motion.circle
                    cx={0}
                    cy={0}
                    r="6"
                    fill="#F59E0B"
                    animate={{ x: [390, 310], y: [260, 240] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {activeRouteKey === 'beira-lusaka' && (
                  <motion.circle
                    cx={0}
                    cy={0}
                    r="6"
                    fill="#F59E0B"
                    animate={{
                      x: [390, 310, 210],
                      y: [260, 215, 190],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {activeRouteKey === 'nacala-lilongwe' && (
                  <motion.circle
                    cx={0}
                    cy={0}
                    r="6"
                    fill="#F59E0B"
                    animate={{ x: [480, 420], y: [120, 100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                )}

                {/* Render nodes */}
                {MAP_NODES.map((node) => {
                  const isPort = node.type === 'port';
                  // Check if this node belongs to the active corridor to highlight it
                  let isHighlighted = false;
                  if (activeRouteKey === 'beira-harare' && (node.id === 'node-beira' || node.id === 'node-harare')) isHighlighted = true;
                  if (activeRouteKey === 'beira-lusaka' && (node.id === 'node-beira' || node.id === 'node-lusaka')) isHighlighted = true;
                  if (activeRouteKey === 'maputo-joburg' && (node.id === 'node-maputo' || node.id === 'node-joburg')) isHighlighted = true;
                  if (activeRouteKey === 'nacala-lilongwe' && (node.id === 'node-nacala' || node.id === 'node-lilongwe')) isHighlighted = true;

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {/* Glow halo */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isPort ? 16 : 10}
                        fill={isHighlighted ? '#F59E0B' : '#1E2229'}
                        fillOpacity={isHighlighted ? 0.25 : 0.05}
                        className="transition-all duration-300"
                      />
                      {/* Node Center */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isPort ? 6.5 : 4.5}
                        fill={isHighlighted ? '#F59E0B' : '#1E2229'}
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        className="transition-all duration-300"
                      />
                      
                      {/* Name Label */}
                      <text
                        x={node.x}
                        y={node.y - (isPort ? 14 : 10)}
                        textAnchor="middle"
                        className="font-display font-black text-[10px] md:text-[11px] fill-brand-dark transition-all duration-300"
                        style={{
                          textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff',
                          fontWeight: isHighlighted ? '900' : '500'
                        }}
                      >
                        {language === 'PT' ? node.namePT : node.nameEN}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Inline Map Legend info */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 mt-4 border-t border-slate-50 pt-4">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#1E2229]" /> {language === 'PT' ? 'Nós do Interior' : 'Inland Nodes'}</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" /> {language === 'PT' ? 'Portos de Mar' : 'Seaports'}</span>
              </div>
              <span>{language === 'PT' ? 'Escala SADC aproximada' : 'Approx SADC scale'}</span>
            </div>

          </div>

          {/* Coluna 3: Mostruário de Rotas Comercial (Substitui o Tracking de Frotas) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="space-y-4">
              <h3 className="text-xl font-display font-extrabold text-brand-dark mb-4">
                {language === 'PT' ? 'Rotas Frequentes' : 'Frequent Route Channels'}
              </h3>
              
              <div className="space-y-3">
                {COMMERCIAL_ROUTES.map((route) => {
                  const isSelected = selectedRouteId === route.id;
                  const isHovered = hoveredRouteKey === route.mapRouteKey;
                  
                  return (
                    <motion.div 
                      key={route.id}
                      onClick={() => setSelectedRouteId(route.id)}
                      onMouseEnter={() => setHoveredRouteKey(route.mapRouteKey)}
                      onMouseLeave={() => setHoveredRouteKey(null)}
                      whileHover={{ x: 5 }}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                        isSelected 
                          ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                          : 'bg-white border-slate-100 text-brand-dark hover:bg-slate-50/80 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          isSelected ? 'bg-brand-yellow text-brand-dark' : 'bg-slate-50 text-slate-500 border border-slate-100'
                        }`}>
                          <Route className="w-4 h-4" />
                        </div>
                        <div>
                          <p className={`text-xs font-mono font-bold tracking-wider uppercase ${isSelected ? 'text-brand-yellow' : 'text-slate-400'}`}>
                            {language === 'PT' ? route.corridor : route.corridorEN}
                          </p>
                          <p className="text-sm font-display font-extrabold mt-0.5">
                            {language === 'PT' ? route.origin : route.originEN}
                          </p>
                          <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'} font-light mt-0.5`}>
                            {language === 'PT' ? 'Destino' : 'To'}: <span className={`font-semibold ${isSelected ? 'text-white' : 'text-brand-dark'}`}>{language === 'PT' ? route.destination : route.destinationEN}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="bg-brand-yellow text-brand-dark text-[11px] font-mono font-black px-3 py-1 rounded-full border border-brand-yellow shadow-xs block">
                          {route.distance}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 block mt-1 uppercase">
                          {language === 'PT' ? 'FOB Dist' : 'FOB Dist'}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Details Panel based on Active Selected Route */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoute.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-amber-50/50 border border-brand-yellow/15 p-5 rounded-2xl"
              >
                <div className="flex items-center gap-2 text-brand-yellow mb-2.5">
                  <Clock className="w-4.5 h-4.5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    {language === 'PT' ? 'Tempo Estimado de Trânsito' : 'Estimated Transit Window'}
                  </span>
                </div>
                <p className="text-sm font-display font-extrabold text-brand-dark">
                  {language === 'PT' ? activeRoute.origin : activeRoute.originEN} 
                  <span className="text-slate-400 font-normal px-1.5">→</span> 
                  {language === 'PT' ? activeRoute.destination : activeRoute.destinationEN}
                </p>
                <p className="text-2xl font-display font-black text-brand-dark mt-1.5">
                  ~ {language === 'PT' ? activeRoute.time : activeRoute.timeEN}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
                  {language === 'PT'
                    ? 'Inlcui facilitação alfandegária prioritária através do regime de garantias aduaneiras MGI.'
                    : 'Includes fast-track customs facilitation via MGI corporate bond guarantees.'}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button 
                onClick={onNavigateToContact}
                className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-sm font-display font-extrabold rounded-xl text-white bg-[#1E2229] hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 shadow-sm uppercase tracking-wider cursor-pointer"
              >
                <span>{language === 'PT' ? 'Consultar Prazos de Entrega' : 'Consult Delivery Windows'}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
