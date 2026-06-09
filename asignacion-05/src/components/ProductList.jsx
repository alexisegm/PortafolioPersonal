import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        
      } catch (err) {
        setError(err.message || 'Ocurrió un error al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh] text-blue-600">
        <Loader2 className="animate-spin mb-4" size={56} />
        <p className="text-xl font-semibold animate-pulse">Cargando inventario...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh] text-red-500 bg-red-50 p-8 rounded-xl border border-red-200 max-w-lg mx-auto mt-10">
        <AlertCircle size={56} className="mb-4" />
        <h2 className="text-2xl font-bold mb-2">¡Ups! Algo salió mal</h2>
        <p className="text-center text-red-400 font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-semibold"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;