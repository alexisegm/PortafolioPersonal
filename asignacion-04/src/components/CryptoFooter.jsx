export function CryptoFooter() {
  return (
    <footer className="crypto-footer">
      <p>© {new Date().getFullYear()} CryptoDash.</p>
      <p className="footer-credits">
        Datos provistos por{' '}
        <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
          CoinGecko API
        </a>
      </p>
    </footer>
  );
}