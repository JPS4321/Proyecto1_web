import React from 'react';
import './Conte.css';
import Card from './Card';
import image from '../assets/react.svg'; // Usando la imagen en la carpeta assets

function Conte() {
    // Datos estáticos para las tarjetas
    const cardsData = [
        {
            id: 1,
            title: "Ejemplo 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageData: {image} // Usando la imagen en la carpeta assets
        },
        {
            id: 2,
            title: "Ejemplo 2",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageData: "../assets/react.svg" // Usando la imagen en la carpeta assets
        },
        {
            id: 3,
            title: "Ejemplo 3",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            imageData: "../assets/react.svg" // Usando la imagen en la carpeta assets
        }
    ];

    return (
        <div className="cont">
            {cardsData.map(card => (
                <Card key={card.id} title={card.title} content={card.content} imageData={card.imageData} />
            ))}
        </div>
    );
}

export default Conte;
