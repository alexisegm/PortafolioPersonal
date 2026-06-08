import { useState, useEffect } from 'react';
import { CryptoCard } from './CryptoCard';
import '../styles/cryptodash.css';
import { CryptoHeader } from './CryptoHeader';
import { CryptoFooter } from './CryptoFooter';
export function CryptoBoard() {

  // 1. Estados obligatorios para la petición asíncrona
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  
  // 2. Estado para el manejo del tema (UI)
  const [theme, setTheme] = useState('dark');

  // Estado para controlar la barra de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Efecto global para inyectar la clase del tema en el body y cubrir toda la pantalla
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // 3. Efecto secundario para el consumo de la API
  useEffect(() => {
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setCoins(data);
        setLoading(false); 
      })
      .catch(err => {
        setError(err.message);
        setLoading(false); 
      });
  }, []);

  // 4. Rutas de renderizado estrictas

  if (loading) {
    return (
      <section className="dashboard-wrapper">
        <CryptoHeader 
          theme={theme} 
          toggleTheme={toggleTheme} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <div className="bento-grid">
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
        <CryptoHeader 
          theme={theme} 
          toggleTheme={toggleTheme} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <div className="bento-grid">
          <div className="error-container">
            <h2>⚠️ Falla de Sincronización</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Filtrar las monedas según el término de búsqueda (por nombre o símbolo)
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Happy Path
  return (
    <section className="dashboard-wrapper">
      <CryptoHeader 
          theme={theme} 
          toggleTheme={toggleTheme} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
      <div className="bento-grid">
        {filteredCoins.map((coin) => (
          <CryptoCard 
            key={coin.id} 
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            currentPrice={coin.current_price}
            priceChange24h={coin.price_change_percentage_24h}
            high24h={coin.high_24h} // NUEVO: Dato extendido máximo
            low24h={coin.low_24h}   // NUEVO: Dato extendido mínimo
          />
        ))}
      </div>
      <CryptoFooter />
    </section>
  );
}