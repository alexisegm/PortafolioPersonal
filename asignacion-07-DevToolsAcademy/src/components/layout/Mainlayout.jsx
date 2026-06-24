import React from 'react';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-screen flex flex-col font-sans">
      {/* Header General */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-5 shadow-lg z-10">
        <h1 className="text-2xl font-black tracking-tight">🎓 DevTools Academy</h1>
      </header>

      {/* Contenedor Principal Bidimensional */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        {/* Área de Trabajo (Workspace) */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
};