import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/operaciones/reportesOps.css';

interface ImagenProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  to?: string; // nueva prop para redirección
}

const Imagen: React.FC<ImagenProps> = ({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  className = '',
  to,
}) => {
  const imgElement = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`custom-image ${className}`}
    />
  );

  return to ? <Link to={to}>{imgElement}</Link> : imgElement;
};

export default Imagen;
