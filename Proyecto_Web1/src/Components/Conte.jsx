import React, { useState, useEffect } from 'react';
import useAPI from '../AdminComponents/hooks/useAPI';
import './Conte.css';
import Card from './Card';

function Conte() {
    const { data: cardsData, error, isLoading } = useAPI('http://localhost:3000/blogs', {});
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div className="content">
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} content={card.content} imageData={card.image_data} />
        ))}
      </div>
    );
  }
  
  export default Conte;