const FeatureCard = ({ title, description, budget, locationName, mapUrl, vibe, priceCategory }) => {
  return (
    <article className="feature-card">
      <div className="card-vibe">{vibe}</div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="location">📍 {locationName}</p>
      </div>
      
      {/* El diseño de "ticket" con el color dinámico según la categoría */}
      <div className={`card-ticket-stub budget-${priceCategory}`}>
        <span className="budget-tag">{budget}</span>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="map-btn">
          Cómo llegar 🗺️
        </a>
      </div>
    </article>
  );
};

export default FeatureCard;