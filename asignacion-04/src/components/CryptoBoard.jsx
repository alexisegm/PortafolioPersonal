import { useState, useEffect } from 'react';

export function CryptoBoard() {
  // 1. Declaración de los tres estados obligatorios
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  // 2. Efecto secundario para el consumo de la API
  useEffect(() => {
    // Top 10 monedas por capitalización de mercado en USD
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

    fetch(API_URL)
      .then(response => {
        // Validación estricta de la respuesta
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setCoins(data);
        setLoading(false); // Apagamos el loading en el happy path
      })
      .catch(err => {
        setError(err.message);
        setLoading(false); // Apagamos el loading también si hay error
      });
  }, []); // Array de dependencias vacío: solo se ejecuta al montar el componente

  // 3. Rutas de renderizado estrictas (Separación visual de estados)
  
  if (loading) {
    return <h2>Sincronizando con el mercado... (Cargando)</h2>;
  }

  if (error) {
    return <h2>Fallo en la conexión: {error}</h2>;
  }

  // Happy Path: Volcado temporal de datos crudos para auditoría visual
  return (
    <section>
      <h2>CryptoDash - Datos Crudos</h2>
      {/* Imprimimos el JSON directamente en pantalla para verificar que tenemos la data correcta */}
      <pre style={{ background: '#eee', padding: '1rem', overflowX: 'auto' }}>
        {JSON.stringify(coins, null, 2)}
      </pre>
    </section>
  );
}
