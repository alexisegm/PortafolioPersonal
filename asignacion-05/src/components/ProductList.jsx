import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle, Inbox } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductList = ({ agregarAlCarrito, criterioOrden, favoritos, toggleFavorito }) => {
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
        
        const enrichedData = data.map(product => ({
          ...product,
          stock: product.rating ? (product.rating.count % 50) : 0,
          enDescuento: product.id % 2 === 0
        }));

        setProducts(enrichedData);
        
      } catch (err) {
        setError(err.message || 'Ocurrió un error al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Lógica de ordenamiento aislada en el componente que renderiza la lista
  const handleSorting = () => {
    // Hacemos una copia del estado para no mutar el array original directamente
    let sortedProducts = [...products];

    switch(criterioOrden) {
      case "Los más vendidos esta semana":
        // Asumimos que un rating.count más alto significa más ventas
        return sortedProducts.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
      case "Precio: Menor a mayor":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "Precio: Mayor a menor":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "Novedades (Lo último)":
        // Asumimos que un ID mayor significa que fue agregado más recientemente a la BD
        return sortedProducts.sort((a, b) => b.id - a.id);
      case "Mejor valorados por usuarios":
        // Ordenamos por la calificación promedio (rating.rate)
        return sortedProducts.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      default:
        return sortedProducts; // Sin orden específico si no hay criterio
    }
  };

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

  // Obtenemos el array ordenado justo antes de renderizar
  const productosAVisualizar = handleSorting();

  if (!loading && !error && productosAVisualizar.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh] text-gray-500 bg-gray-50 p-8 rounded-xl border border-gray-200 max-w-lg mx-auto mt-10">
        <Inbox size={56} className="mb-4 text-gray-400" />
        <h2 className="text-2xl font-bold mb-2 text-gray-700">Sin resultados</h2>
        <p className="text-center font-medium mb-6">No hay productos disponibles en este momento.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Actualizar catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {productosAVisualizar.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          agregarAlCarrito={agregarAlCarrito}
          favorito={favoritos.includes(product.id)}
          toggleFavorito={toggleFavorito}
        />
      ))}
    </div>
  );
};

export default ProductList;