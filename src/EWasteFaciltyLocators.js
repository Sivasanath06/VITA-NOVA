import React, { useState } from 'react';
import './App.css';
import EwasteMap from './EwasteMap';


function EWasteFacilityLocators() {
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Manually construct the geocoding API URL
      const query = encodeURIComponent(city);
      const proximity = 'ip';
      const accessToken = 'pk.eyJ1Ijoic3JpLWdhbmVzaCIsImEiOiJjbG14M2E3aHYwbnZuMmpsaXpmcnNqcnFuIn0.ggbiizwpKSHvoAOpwFFOvw'; // Replace with your actual Mapbox Access Token
  
      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=${proximity}&access_token=${accessToken}`;
  
      const response = await fetch(apiUrl);
  
      if (response.ok) {
        const data = await response.json();
  
        if (data.features.length > 0) {
          console.log(data.features[0].center);
          const [ lon, lat ] = data.features[0].center;
          setCoordinates({ lat, lng: lon });
          console.log({lat,lon})
        } else {
          console.error('Location not found');
        }
      } else {
        console.error('Error geocoding:', response.statusText);
      }
    } catch (error) {
      console.error('Error geocoding:', error.message);
    }
  };
  

  return (
    <div className="App">
      <h1 className='locatorHeading'>Nearest E-Waste Facilities</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={handleCityChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <EwasteMap userCoordinates={coordinates} />
    </div>
  );
}

export default EWasteFacilityLocators;
