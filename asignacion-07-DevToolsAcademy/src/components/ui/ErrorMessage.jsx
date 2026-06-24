import React from 'react';
import { RetryButton } from './RetryButton';

export const ErrorMessage = ({ title = "Ha ocurrido un error", message = "No se pudo cargar la herramienta seleccionada.", onRetry }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px]">
      <div className="text-6xl mb-4 animate-bounce">⚠️</div>
      <h3 className="text-2xl font-bold text-red-600 tracking-tight">{title}</h3>
      <p className="text-slate-600 mt-2 max-w-md">{message}</p>
      
      {onRetry && (
        <div className="mt-8">
          <RetryButton onClick={onRetry} />
        </div>
      )}
    </div>
  );
};