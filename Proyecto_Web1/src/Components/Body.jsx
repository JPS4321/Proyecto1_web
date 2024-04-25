import React from 'react';
import './Body.css';
import Conte from './Conte';
import Sidebar from './Sidebar';

function Body() {
    return (
        <div className="main-container">
            <Conte />
            <Sidebar />
        </div>
    );
}

export default Body;
