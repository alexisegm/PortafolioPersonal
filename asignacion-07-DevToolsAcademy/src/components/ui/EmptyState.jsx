import React from 'react';

export const EmptyState = ({ title = "Sin contenido", message = "No hay información disponible para esta sección en este momento." }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px]">
      <div className="text-5xl mb-4 text-slate-400">📭</div>
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h3>
      <p className="text-slate-500 mt-2 max-w-sm">{message}</p>
    </div>
  );
};