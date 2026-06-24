import React, { useState, useEffect } from 'react';
import { useDevTools } from '../../context/DevToolsContext';
import { LoadingState } from '../../components/ui/LoadingState';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { EmptyState } from '../../components/ui/EmptyState';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { DisableButton } from '../../components/ui/DisableButton';

export const ToolDetail = () => {
  const { activeTabData } = useDevTools();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isActionRunning, setIsActionRunning] = useState(false); 

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (activeTabData && activeTabData.id === 'security' && Math.random() > 0.5) {
        setHasError(true);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [activeTabData]);

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const handleSimulateAction = () => {
    setIsActionRunning(true);
    setTimeout(() => {
      setIsActionRunning(false);
    }, 2000);
  };

  if (isLoading) return <LoadingState />;
  if (hasError) {
    return (
      <ErrorMessage 
        title="Error de Simulación de Red" 
        message="La pestaña Security arrojó un fallo de conexión simulado. Comprobando certificados..."
        onRetry={handleRetry}
      />
    );
  }
  if (!activeTabData) {
    return (
      <EmptyState 
        title="Herramienta no encontrada" 
        message="Por favor, selecciona una herramienta válida desde la barra lateral."
      />
    );
  }

  // Extraemos la URL de la imagen (con una imagen genérica por defecto por seguridad)
  const { 
    title = 'Sin título', 
    icon = '⚙️', 
    description = 'Sin descripción', 
    content,
    imageUrl = 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop' 
  } = activeTabData;
  
  const overviewText = content?.overview || 'No hay descripción general disponible.';
  const featuresList = content?.features || [];
  const proTipText = content?.proTip || 'Mantén tus DevTools actualizadas para acceder a las últimas funciones.';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 max-w-4xl mx-auto animate-fadeIn relative">
      <div className="flex items-center mb-6 border-b border-slate-100 pb-6">
        <div className="bg-blue-50 p-4 rounded-2xl text-4xl mr-4 shadow-inner">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">{title}</h2>
          <p className="text-slate-500 text-lg mt-1">{description}</p>
        </div>
        
        {/* Botón de Diagnóstico actualizado */}
        <div className="ml-auto">
          <DisableButton 
            disabled={isActionRunning} 
            onClick={handleSimulateAction}
            tooltipText={`Escanea ${title} (Simula un proceso para probar el bloqueo del botón)`}
          >
            Simulador de Diagnóstico
          </DisableButton>
        </div>
      </div>

      {/* Imagen dinámica integrada al componente FallbackImage */}
      <div className="mb-8 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-64 w-full relative flex items-center justify-center shadow-inner">
        <FallbackImage 
          src={imageUrl} 
          alt={`Representación conceptual de la herramienta ${title}`}
          className="w-full h-full"
        />
        <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md font-semibold flex items-center shadow-lg border border-slate-700/50">
          <span className="mr-2 text-blue-400">●</span> Contexto Visual: {title}
        </div>
      </div>

      <div className="prose max-w-none mb-8">
        <h3 className="text-xl font-bold text-slate-700 mb-3">Descripción General</h3>
        <p className="text-slate-600 leading-relaxed text-lg">{overviewText}</p>
      </div>

      <div className="mb-8">
        <h4 className="font-bold text-slate-700 uppercase tracking-wider text-sm mb-4">
          Principales Funciones
        </h4>
        {featuresList.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {featuresList.map((feat, index) => (
              <li 
                key={index} 
                className="flex items-center bg-slate-50 p-3 rounded-xl text-slate-600 border border-slate-100 text-sm font-medium transition-colors hover:bg-blue-50"
              >
                <span className="mr-2 text-blue-500 text-base">✓</span> {feat}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400 text-sm italic">No se especificaron funciones particulares.</p>
        )}
      </div>

      <div className="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl shadow-sm">
        <h4 className="font-bold text-blue-900 uppercase tracking-wider text-xs mb-2">💡 Consejo Pro</h4>
        <p className="text-blue-900 font-medium leading-snug">{proTipText}</p>
      </div>
    </div>
  );
};