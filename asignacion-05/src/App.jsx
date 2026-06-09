import React from 'react';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
                TiendaAPI
              </h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Asignación 04: Patrón Contenedor/Presentación
              </p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">API Conectada</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductList />
      </main>

      <footer className="bg-white border-t py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm font-medium">
          <p>Desarrollado para la Asignación 04 (DWF) • Implementando useEffect y useState</p>
        </div>
      </footer>
    </div>
  );
}