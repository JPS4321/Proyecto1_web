import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, content, imageData }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            {imageData && <img src={imageData} alt={title} className="card-image"/>}
            <p className="card-description">{content}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageData: PropTypes.string,
};

export default Card;
