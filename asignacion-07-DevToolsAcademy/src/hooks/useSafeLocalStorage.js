import { useState } from 'react';

export const useSafeLocalStorage = (key, initialValue) => {
  // Inicializamos el estado con una función para que la lectura del localStorage 
  // solo ocurra una vez (al montar el componente), mejorando el rendimiento.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Si existe el valor en localStorage, lo parseamos. Si no, usamos el inicial.
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Prevención de anti-patrón: Si el usuario tiene bloqueado el localStorage (ej. modo estricto de privacidad),
      // capturamos el error de forma silenciosa y devolvemos el valor inicial para que la app no colapse.
      console.warn(`Error leyendo localStorage con la key "${key}":`, error);
      return initialValue;
    }
  });

  // Retornamos una versión envuelta de la función setter de useState
  // que también guarda el nuevo valor en localStorage.
  const setValue = (value) => {
    try {
      // Permitimos que 'value' sea una función (igual que en useState normal)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Actualizamos el estado de React
      setStoredValue(valueToStore);
      
      // Actualizamos el localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error guardando en localStorage con la key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};