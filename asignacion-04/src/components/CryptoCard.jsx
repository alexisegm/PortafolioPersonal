import { memo } from 'react';

export const CryptoCard = memo(function CryptoCard({ name, symbol, image, currentPrice, priceChange24h, high24h, low24h }) {
  // Evaluamos la tendencia para asignar colores verde o rojo
  const isPositive = priceChange24h >= 0;

  return (
    <article className="crypto-card">
      <header className="card-header">
        <img src={image} alt={`Logo de ${name}`} className="crypto-icon" />
        <div className="crypto-title">
          <h3>{name}</h3>
          <span className="crypto-symbol">{symbol.toUpperCase()}</span>
        </div>
      </header>
      
      <div className="card-body">
        <p className="crypto-price">${currentPrice.toLocaleString()}</p>
        <p className={`crypto-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : ''}{priceChange24h.toFixed(2)}%
        </p>

        {/* Datos estructurales extendidos: Rango de 24h */}
        <div className="crypto-range-24h">
          <div className="range-item">
            <span className="range-label">Máx 24h:</span>
            <span className="range-value">${high24h ? high24h.toLocaleString() : '---'}</span>
          </div>
          <div className="range-item">
            <span className="range-label">Mín 24h:</span>
            <span className="range-value">${low24h ? low24h.toLocaleString() : '---'}</span>
          </div>
        </div>
      </div>
    </article>
  );
});