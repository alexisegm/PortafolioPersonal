import { memo } from 'react';
import { CryptoCard } from './CryptoCard';

export const CryptoGrid = memo(function CryptoGrid({ coins }) {
  return (
    <div className="bento-grid">
      {coins.map((coin) => (
        <CryptoCard
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
          currentPrice={coin.current_price}
          priceChange24h={coin.price_change_percentage_24h}
          high24h={coin.high_24h}
          low24h={coin.low_24h}
        />
      ))}
    </div>
  );
});
