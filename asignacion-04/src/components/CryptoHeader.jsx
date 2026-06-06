// src/components/CryptoHeader.jsx

export function CryptoHeader({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="header-actions">
      <div className="dashboard-header" style={{ marginBottom: 0 }}>
        <h1>CryptoDash</h1>
      </div>
      
      {/* Nuevo contenedor del Switch */}
      <div className="theme-switch-wrapper" onClick={toggleTheme}>
        <span className="theme-icon">{isDark ? '🌙' : '☀️'}</span>
        <button 
          className={`theme-switch ${isDark ? 'switch-dark' : 'switch-light'}`}
          aria-label="Alternar tema"
        >
          <span className="switch-thumb"></span>
        </button>
      </div>
    </header>
  );
}