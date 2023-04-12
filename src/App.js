import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import L from 'leaflet';
import getMushrooms, { Color, Spots } from './data/API';

function App() {
  const mapRef = useRef(null);
  const [selectedSpots, setSelectedSpots] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [filteredMushrooms, setFilteredMushrooms] = useState([]);
  const [colorOptions, setColorOptions] = useState([])
  const [spotsOptions, setSpotsOptions] = useState([])

  const filterMushrooms = (mushrooms) => {
    return mushrooms.filter((mushroom) => {
      const spotsMatch = selectedSpots === '' || mushroom.spots === parseInt(selectedSpots);
      const colorMatch = selectedColor === '' || mushroom.color === parseInt(selectedColor);
      return spotsMatch && colorMatch;
    });
  };

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([52.09, 5.23333], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }
  }, []);

  useEffect(() => {
    getMushrooms()
      .then((response) => {
        const filtered = filterMushrooms(response);
        const colorOptions = [...new Set(filtered.map(mushroom => mushroom.color))];
        const spotsOptions = [...new Set(filtered.map(mushroom => mushroom.spots))];
        setColorOptions(colorOptions);
        setSpotsOptions(spotsOptions);
        setFilteredMushrooms(filtered);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedSpots, selectedColor]);

  console.log({colorOptions});

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          layer.remove();
        }
      });

      filteredMushrooms.forEach((Mushroom) => {
        const marker = L.marker(Mushroom.latlng, Mushroom.iconUrl).addTo(mapRef.current);
        marker.bindPopup(`${Mushroom.name}<br/><br/> Spots: ${Mushroom.spotsKey}<br/><br/> Color: ${Mushroom.colorKey}`);
      });
    }
  }, [filteredMushrooms]);

  const clearSpotsFilters = () => {
    setSelectedSpots('');
  };
 
  const clearColorFilters = () => {
    setSelectedColor('');
  };


  return (
    <div className='App'>
      <div className='filter-container'>
        <div className='filter-box'>
        <label>
          Filter by spots:{' '}
          <select
            value={selectedSpots}
            onChange={(e) => setSelectedSpots(e.target.value)}
          >
            <option value="">All</option>
            {Object.entries(Spots).map(([key, value]) => (
              <option key={key} disabled={!spotsOptions.includes(value)} value={value}>
                {key}
              </option>
            ))}
          </select>
        </label>
        <button onClick={clearSpotsFilters}>Clear Spots</button>
        </div>
        <br>
        </br>
        <br>
        </br>
        <div className='filter-box'>
        <label>
          Filter by color:{' '}
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">All</option>
            {Object.entries(Color).map(([key, value]) => (
              <option key={key} disabled={!colorOptions.includes(value)} value={value}>
                {key}
              </option>
            ))}
          </select>
        </label>
        <button onClick={clearColorFilters}>Clear Color</button>
        </div>

  </div>
      <div id="map" style={{ height: '500px' }}></div>
    </div>
  );
}

export default App;
