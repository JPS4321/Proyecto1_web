import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import axios from 'axios'; // You might need to install axios with npm or yarn
=======
import useAPI from '../AdminComponents/hooks/useAPI';
>>>>>>> PRUEBA-TALVEZ
import './Conte.css';
import Card from './Card';

function Conte() {
<<<<<<< HEAD
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace with the correct URL of your backend API
                const response = await axios.get('http://localhost:3000/blogs');
                setCardsData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="cont">
            {cardsData.map(card => (
                // Make sure the backend data has 'title', 'content', and 'imageData' fields
                <Card key={card.id} title={card.title} content={card.content} imageData={card.image_data} />
            ))}
        </div>
=======
    const { data: cardsData, error, isLoading } = useAPI('http://localhost:3000/blogs', {});
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div className="content">
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} content={card.content} imageData={card.image_data} />
        ))}
      </div>
>>>>>>> PRUEBA-TALVEZ
    );
  }
  
  export default Conte;