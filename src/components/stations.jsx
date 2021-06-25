import React,{ useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
//import Stops from 'apiFunctions';
//import MapEmbed from '../map'

const Stations = ({ amatch }) => {

    const line = amatch;
    const [direction, setDirection] = useState('all');
    const [stops, setStops] = useState({
      stations: [], 
    });
    
    const handleDirection = (d) => {
      setDirection(d);
      stops.direction = d;
    };

    useEffect(() => {
      fetch(`https://api.tfl.gov.uk/Line/${line}/Route/Sequence/${direction}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setStops(data);
      });
    }, []);


  return(
      <div>
        <div className="direction-filter">
          <p>Stations Served: {stops.stations.length} (direction: {direction} )</p> 
          <button onClick={() => handleDirection('inbound')} >Inbound</button>
          <button onClick={() => handleDirection('outbound')} >Outbound</button> 
          <button onClick={() => handleDirection('all')} >All</button>
        </div>
            { stops.stations.map(item => 
              <div key={Math.random()} className="stations-card">
                  <p>{item.name.replace('Underground Station', '')}</p>
              </div>
            )}
      </div>
    )
  
}

export default Stations