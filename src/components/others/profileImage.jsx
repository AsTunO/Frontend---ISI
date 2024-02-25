
import React from 'react';


function ImageComponent({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        border: '3px solid #AE3C33', // Largura e cor da borda
      }}
    />
  );
}

export default ImageComponent;