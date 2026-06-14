import React, { useState } from 'react';
import { ShoppingCart, X, MessageCircle, Filter } from 'lucide-react';

const Header = ({ carrito, eliminarDelCarrito, criterioOrden, setCriterioOrden }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [envio, setEnvio] = useState(0);
  const [cupon, setCupon] = useState('');
  const [descuento, setDescuento] = useState(0);

  const opcionesFiltro = [
    "Los más vendidos esta semana",
    "Precio: Menor a mayor",
    "Precio: Mayor a menor",
    "Novedades (Lo último)",
    "Mejor valorados por usuarios"
  ];

  // Cálculos garantizados
  const subtotal = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const aplicarCupon = () => {
    if (cupon === 'REACT2026') {
      setDescuento(subtotal * 0.1);
    } else {
      setDescuento(0);
      alert('Cupón inválido');
    }
  };

  const total = subtotal + envio - descuento;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-blue-900/40 border-b border-blue-800/30 shadow-[0_4px_30px_rgba(30,58,138,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 opacity-50 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
              PixelStore
            </h1>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Interfaz Modular de Alto Rendimiento
            </p>
          </div>
          <div className="flex items-center gap-4">
            

            {/* Sistema de Sorting / Filtros */}
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`p-2 rounded-full transition flex items-center justify-center ${isFilterOpen || criterioOrden ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                title="Ordenar productos"
              >
                <Filter size={24} />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white border border-gray-200 shadow-xl rounded-xl py-2 z-50">
                  <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b mb-1">
                    Ordenar por
                  </h3>
                  {opcionesFiltro.map(opcion => (
                    <button
                      key={opcion}
                      onClick={() => {
                        setCriterioOrden(opcion);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition ${criterioOrden === opcion ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-gray-700'}`}
                    >
                      {opcion}
                    </button>
                  ))}
                  {criterioOrden && (
                    <button 
                      onClick={() => { setCriterioOrden(''); setIsFilterOpen(false); }}
                      className="w-full text-left px-4 py-2 text-xs text-red-500 hover:bg-red-50 font-semibold border-t mt-1"
                    >
                      Borrar filtros
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Canal de Atención al Cliente (WhatsApp) */}
            <button 
              onClick={() => window.open('https://wa.me/TU_NUMERO', '_blank', 'noopener,noreferrer')}
              className="p-2 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition flex items-center justify-center"
              title="Atención al Cliente"
            >
              <MessageCircle size={24} fill="currentColor" />
            </button>

            {/* Carrito */}
            <div className="relative">
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition relative flex items-center"
              >
                <ShoppingCart size={24} className="text-gray-700" />
                {totalArticulos > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalArticulos}
                  </span>
                )}
              </button>

              {isCartOpen && (
                <div className="absolute right-0 mt-4 w-80 bg-white border border-gray-200 shadow-xl rounded-xl p-5 z-50">
                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="font-bold text-gray-800">Tu Carrito</h3>
                    <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-red-500">
                      <X size={18} />
                    </button>
                  </div>
                  
                  {carrito.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center gap-4">
                      <div className="bg-gray-100 p-4 rounded-full">
                        <ShoppingCart size={32} className="text-gray-400" />
                      </div>
                      <p className="text-gray-600 font-medium">Tu carrito está vacío</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                      >
                        Explorar productos
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-40 overflow-y-auto mb-4 space-y-3 pr-1">
                        {carrito.map((item) => (
                          <div key={item.id} className="relative flex justify-between items-center text-sm pr-6 py-1 border-b border-gray-50 pb-2 last:border-none">
                            <div className="flex items-center w-40">
                              <span className="text-gray-700 truncate" title={item.title}>
                                {item.title}
                              </span>
                              <span className="font-bold text-blue-600 ml-1 shrink-0">
                                (x{item.cantidad})
                              </span>
                            </div>

                            <span className="font-semibold text-gray-900">
                              ${(item.price * item.cantidad).toFixed(2)}
                            </span>
                            
                            <button 
                              onClick={() => eliminarDelCarrito(item.id)}
                              className="absolute top-0 right-0 text-gray-400 hover:text-red-500 transition-colors font-bold p-0.5 text-xs"
                              title="Eliminar unidad"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-3 border-t pt-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-bold">${subtotal.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                          <label className="text-gray-600 text-xs font-medium">Modo de envío:</label>
                          <select 
                            className="border border-gray-300 rounded p-1.5 text-sm bg-gray-50 focus:outline-none focus:border-blue-500"
                            value={envio}
                            onChange={(e) => setEnvio(Number(e.target.value))}
                          >
                            <option value={0}>Retiro en tienda ($0.00)</option>
                            <option value={5}>Envío Standard ($5.00)</option>
                            <option value={15}>Envío Express ($15.00)</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-gray-600 text-xs font-medium">Cupón (prueba con REACT2026):</label>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={cupon}
                              onChange={(e) => setCupon(e.target.value)}
                              className="border border-gray-300 rounded p-1.5 text-sm flex-1 focus:outline-none focus:border-blue-500 uppercase"
                              placeholder="Código"
                            />
                            <button 
                              onClick={aplicarCupon} 
                              className="bg-gray-800 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-gray-900 transition"
                            >
                              Aplicar
                            </button>
                          </div>
                          {descuento > 0 && (
                            <span className="text-green-600 text-xs font-medium mt-1">
                              Descuento aplicado: -${descuento.toFixed(2)}
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between text-lg font-extrabold border-t border-gray-200 pt-3 text-gray-900 mt-2">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition mt-2">
                          Proceder al pago
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;