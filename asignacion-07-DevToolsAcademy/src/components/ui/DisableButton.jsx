import React from 'react';

export const DisableButton = ({ 
  onClick, 
  disabled, 
  children, 
  className = '',
  tooltipText = "Haz clic para simular una acción" // Texto por defecto
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={disabled ? "La tarea se está ejecutando..." : tooltipText} // <-- Aquí inyectamos el comentario
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center min-w-[160px] ${
        disabled
          ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200 shadow-none'
          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer'
      } ${className}`}
    >
      {disabled ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Procesando...
        </>
      ) : (
        children
      )}
    </button>
  );
};