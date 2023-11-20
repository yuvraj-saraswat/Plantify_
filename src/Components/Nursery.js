import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import "./Styles/Nursery.css"

const Nursery = () => {
   const { nurseryId } = useParams();
    const [nursery, setNursery] = useState({});
    const [plants, setPlants] = useState([]);
    const [priceRange, setPriceRange] = useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:3000/api/nursery/${nurseryId}`)
        .then(response => setNursery(response.data))
        .catch(error => console.error('Error fetching nursery details:', error));
  
      axios.get(`http://localhost:3000/api/nursery/${nurseryId}/plants`)
        .then(response => setPlants(response.data))
        .catch(error => console.error('Error fetching plants in nursery:', error));

        axios.get(`http://localhost:3000/api/nursery/${nurseryId}/avg`)
        .then(response => setPriceRange(response.data))
        .catch(error => console.error('Error fetching plants in nursery:', error));
    }, [nurseryId]);
  
    return (
        <>
      <div className='nursery-outer'>
        <div className='nursery-info'>
            <div className='nursery-img'>
              <div className='nursery-img-cont'>
                <img src={nursery.photo_url} alt={nursery.name} />
              </div>
                
            </div>
            <div className='nursery-details'>
                <h1>{nursery.name}</h1>
                <p><b>Location: </b><a href={nursery.link_loc}>{nursery.location}</a></p>
                <p><b>Contact: </b>{nursery.contact}</p>
                <p><b>Rating: </b>{nursery.rating}/5</p>
                <p><b>Timing: </b>{nursery.open_time}am - {nursery.close_time}pm</p>
                <p><b>Average Price: </b>₹{priceRange.avg_price}</p>
                <p><b>Price Range: </b>₹{priceRange.min_price} - ₹{priceRange.max_price}</p>
            </div>
        </div>

        
        <h2>Plants in Nursery</h2>
        
        <div className="card-list2">
          {plants.map(plant => (
            <div className="card2">
            <img src={plant.photo_url} />
            <div className="card-content2">
              <h3>{plant.name}</h3>
              <h5><b>Price :</b> ₹{plant.price} </h5>
            </div>
            <button><b>+</b></button>
          </div>
          ))}
          </div>
        </div>
      </>
    );
  };

  export default Nursery;