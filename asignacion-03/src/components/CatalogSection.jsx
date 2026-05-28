import FeatureCard from './FeatureCard';
import { planesEconoRutas } from '../data/rutas';

const CatalogSection = () => {
  return (
    <section id="catalogo" className="catalog-section">
      <h2>Catálogo de Rutas</h2>
      
      <div className="catalog-grid">
        {planesEconoRutas.map((plan) => (
          <FeatureCard 
            key={plan.id}
            title={plan.title}
            description={plan.description}
            budget={plan.budget}
            locationName={plan.locationName}
            mapUrl={plan.mapUrl}
            vibe={plan.vibe}
            priceCategory={plan.priceCategory}
          />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;