import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Asegúrate de tener Card.css en el mismo directorio o ajusta la ruta

function Card({ title, content, imageData }) {
    return (
        <div className="content">
            <h2 className="card-content-title">{title}</h2>
            {imageData && <img src={imageData} alt={title} className="content-image" />}
            <p className="content-description">{content}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageData: PropTypes.string, // Opcional para incluir una imagen o no
};

export default Card;
