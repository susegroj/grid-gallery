import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { GrMapLocation } from 'react-icons/gr';

import './grid-gallery.scss';

const GridGallery = ({ images }) => {
  const { t } = useTranslation('common');

  return (
    <div className="gallery-wrapper">
      {
        images.map(({ id, src, alt, city, country, location }) => (
          <figure key={id} className="gallery-item">
            <div className="gallery-item-hover">
              <a 
                className="gmaps-btn"
                href={location}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrMapLocation className="icon" />
                <span>Ver en Google Maps</span>
              </a>
            </div>
            <img src={src} alt={alt} />
            <figcaption className="gallery-item-info">
              <p className="gallery-item-info-city">
                {city}
              </p>
              <p className="gallery-item-info-country">
                {country}
              </p>
            </figcaption>
          </figure>
        ))
      }
    </div>
  );
};

GridGallery.propTypes = { 
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

GridGallery.defaultProps = { };

export default GridGallery;
