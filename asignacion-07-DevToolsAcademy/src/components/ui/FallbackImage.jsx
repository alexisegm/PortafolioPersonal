import React, { useState, useEffect } from 'react';

export const FallbackImage = ({ 
  src, 
  alt, 
  fallbackSrc = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop', 
  className 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  // Si la propiedad 'src' cambia desde afuera, actualizamos el estado local
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    // Evitamos bucles infinitos si la imagen de fallback también llega a fallar
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`${className} object-cover transition-all duration-300`}
    />
  );
};