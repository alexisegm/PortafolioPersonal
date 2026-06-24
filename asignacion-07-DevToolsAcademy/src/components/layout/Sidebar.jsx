import React from 'react';
import { useDevTools } from '../../context/DevToolsContext';

export const Sidebar = () => {
  const { devToolsData, activeTabId, setActiveTabId } = useDevTools();

  return (
    <aside className="w-72 bg-white border-r border-slate-200 p-6 overflow-y-auto hidden md:block">
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
        Explorador de Herramientas
      </h2>
      
      <nav className="space-y-3">
        {devToolsData.map((tab) => {
          const isActive = activeTabId === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`w-full text-left p-3 rounded-xl font-medium transition-all duration-300 flex items-center border ${
                isActive 
                  ? 'bg-blue-600 text-white border-blue-700 shadow-md -translate-y-1' // Diseño del botón ACTIVO
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1' // Diseño del botón INACTIVO con HOVER
              }`}
            >
              <span className="mr-3 text-2xl">{tab.icon}</span> 
              {tab.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};