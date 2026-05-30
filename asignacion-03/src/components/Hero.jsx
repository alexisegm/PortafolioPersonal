const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Tu ciudad, tu presupuesto!</h1>
      <p>Descubre planes increíbles sin desajustar el bolsillo.</p>
      
      <div className="hero-filters">
        <button className="filter-btn">🌳 Planes Chill</button>
        <button className="filter-btn">⛰️ Modo Aventura</button>
        <button className="filter-btn">🍔 Full Plomo</button>
        <button className="filter-btn">❤️ Modo cita</button>
      </div>
    </section>
  );
};

export default Hero;