import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, agregarAlCarrito, favorito, toggleFavorito }) => {
  const isAvailable = product.stock > 0;

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full relative">
      
      {product.enDescuento && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
          ¡OFERTA!
        </div>
      )}

      <button
        onClick={() => toggleFavorito(product.id)}
        className={`absolute top-3 left-3 z-10 p-2 rounded-full transition ${favorito ? 'bg-red-100 text-red-600' : 'bg-white text-gray-400 hover:bg-gray-100 hover:text-red-500'}`}
        aria-label={favorito ? 'Quitar favorito' : 'Agregar a favoritos'}
      >
        <Heart size={18} fill={favorito ? 'currentColor' : 'none'} />
      </button>

      <div className="h-48 w-full flex justify-center items-center bg-white mb-4 rounded-md overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="font-bold text-gray-800 text-md line-clamp-2 mb-2" title={product.title}>
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <p className={`text-sm font-bold mb-2 ${isAvailable ? 'text-green-600' : 'text-red-600'}`}>
          {isAvailable ? `Disponible: ${product.stock} en stock` : 'Agotado'}
        </p>
      </div>

      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex flex-col">
          {product.enDescuento && (
            <span className="text-xs text-gray-400 line-through">
              ${(product.price * 1.25).toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-extrabold text-gray-900">
            ${product.price}
          </span>
        </div>
        
        <button 
          disabled={!isAvailable}
          // Manejador de evento enviando el objeto product hacia arriba
          onClick={() => agregarAlCarrito(product)}
          className={`${
            isAvailable 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          } text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium`}
        >
          <ShoppingCart size={18} />
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;