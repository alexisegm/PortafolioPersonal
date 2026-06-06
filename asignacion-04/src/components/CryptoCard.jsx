export function CryptoCard({ name, symbol, image, currentPrice, priceChange24h }) {
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
      </div>
    </article>
  );
}