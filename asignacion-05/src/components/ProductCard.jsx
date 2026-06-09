import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
      {/* Contenedor de la imagen */}
      <div className="h-48 w-full flex justify-center items-center bg-white mb-4 rounded-md overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Información del producto */}
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
      </div>

      {/* Precio y Botón */}
      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-2xl font-extrabold text-gray-900">
          ${product.price}
        </span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium">
          <ShoppingCart size={18} />
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
