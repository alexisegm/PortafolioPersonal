import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

export default function App() {
  // Estado para el criterio de ordenamiento seleccionado
  const [criterioOrden, setCriterioOrden] = useState('');

  // Inicialización perezosa (lazy initializer) para leer el localStorage al cargar
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('pixelStore_carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Efecto para sincronizar el estado del carrito con localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('pixelStore_carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Lógica de agrupación de carrito
  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find(item => item.id === producto.id);
    
    if (itemExistente) {
      setCarrito(
        carrito.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Lógica de decremento y eliminación
  const eliminarDelCarrito = (id) => {
    const itemExistente = carrito.find(item => item.id === id);
    if (!itemExistente) return;
    
    if (itemExistente.cantidad > 1) {
      setCarrito(
        carrito.map(item => 
          item.id === id 
            ? { ...item, cantidad: item.cantidad - 1 } 
            : item
        )
      );
    } else {
      setCarrito(carrito.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header 
        carrito={carrito} 
        eliminarDelCarrito={eliminarDelCarrito} 
        criterioOrden={criterioOrden}
        setCriterioOrden={setCriterioOrden}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductList 
          agregarAlCarrito={agregarAlCarrito} 
          criterioOrden={criterioOrden}
        />
      </main>

      <footer className="bg-white border-t py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm font-medium">
          <p>© 2026 · Desarrollado con React. Datos suministrados en tiempo real por la API de Productos. Interfaz construida con arquitectura modular y componentes reactivos.</p>
        </div>
      </footer>
    </div>
  );
}