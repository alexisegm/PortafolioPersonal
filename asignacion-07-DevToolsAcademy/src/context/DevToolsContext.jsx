import React, { createContext, useContext } from 'react';
import { devToolsData } from '../data/devtoolsData';
import { useSafeLocalStorage } from '../hooks/useSafeLocalStorage'; // <-- Importamos nuestro hook

const DevToolsContext = createContext();

export const DevToolsProvider = ({ children }) => {
  // Reemplazamos useState por useSafeLocalStorage. 
  // Le damos la llave 'devtools-active-tab' para identificarlo en el navegador.
  const [activeTabId, setActiveTabId] = useSafeLocalStorage('devtools-active-tab', devToolsData[0].id);

  const activeTabData = devToolsData.find(tab => tab.id === activeTabId);

  return (
    <DevToolsContext.Provider 
      value={{ 
        activeTabId, 
        setActiveTabId, 
        activeTabData, 
        devToolsData
      }}
    >
      {children}
    </DevToolsContext.Provider>
  );
};

export const useDevTools = () => {
  const context = useContext(DevToolsContext);
  if (!context) {
    throw new Error("useDevTools debe usarse dentro de un DevToolsProvider");
  }
  return context;
};