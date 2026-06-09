export function CryptoFooter() {
  return (
    <footer className="crypto-footer">
      <p>© {new Date().getFullYear()} CryptoDash.</p>    
      <p style={{ margin: "0.5rem 0", fontStyle: "italic", opacity: 0.8 }}>
        Dashboard en tiempo real para el seguimiento de criptoactivos de alta capitalización.
      </p>
      <p className="footer-credits">
        Datos provistos por{' '}
        <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
          CoinGecko API
        </a>
      </p>
    </footer>
  );
}