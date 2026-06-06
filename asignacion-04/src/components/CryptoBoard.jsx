import { useState, useEffect } from 'react';
import { CryptoCard } from './CryptoCard';
import '../styles/cryptodash.css';
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
    return (
      <section className="dashboard-wrapper">
        <header className="dashboard-header">
          <h1>CryptoDash</h1>
        </header>
        <div className="bento-grid">
          {/* Renderizamos 10 tarjetas esqueleto usando un array temporal */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="skeleton-card"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="dashboard-wrapper">
        <header className="dashboard-header">
          <h1>CryptoDash</h1>
        </header>
        <div className="bento-grid">
          <div className="error-container">
            <h2>⚠️ Falla de Sincronización</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Happy Path: Renderizado de la lista
  return (
    <section className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>CryptoDash</h1>
      </header>
      
      <div className="bento-grid">
        {coins.map((coin) => (
          <CryptoCard 
            key={coin.id} // Prop obligatoria en React al usar .map()
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            currentPrice={coin.current_price}
            priceChange24h={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </section>
  );
}