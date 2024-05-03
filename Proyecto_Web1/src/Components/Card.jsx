import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; 

function Card({ title, content, imageData }) {
    return (
<<<<<<< HEAD
        <div className="card">
            <h1 className="card-title">{title}</h1>
            {imageData && <img src={imageData} alt={title} className="card-image"/>}
            <p className="card-description">{content}</p>
=======
        <div className="content">
            <h2 className="card-content-title">{title}</h2>
            {imageData && <img src={imageData} alt={title} className="content-image" />}
            <p className="content-description">{content}</p>
>>>>>>> PRUEBA-TALVEZ
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageData: PropTypes.string, 
};

export default Card;
