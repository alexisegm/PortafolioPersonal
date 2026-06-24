import React from 'react';

export const LoadingState = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Cargando documentación...</h3>
      <p className="text-slate-500 mt-2 max-w-sm">Preparando el entorno interactivo para que puedas seguir aprendiendo.</p>
    </div>
  );
};