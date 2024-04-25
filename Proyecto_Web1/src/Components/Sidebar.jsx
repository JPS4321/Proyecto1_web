import React from 'react';
import './Sidebar.css';
import puppy from '../assets/react.svg';

function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={puppy} alt="Descripción de la imagen" />
            <h1>"Sobre el Autor"</h1>
            <p>Soy Juan Pablo, un apasionado estudiante de ingeniería en sistemas y el autor detrás de un blog dedicado a los videojuegos...</p>
        </aside>
    );
}

export default Sidebar;
