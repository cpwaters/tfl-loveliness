import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import Stops from 'apiFunctions';
//import MapEmbed from '../map'

const Stops = ({ amatch, mode }) => {

    const line = amatch;
    const m = mode;
    const [direction, setDirection] = useState('all');
    const [stops, setStops] = useState([{}]);
    
    const handleDirection = (d) => {
      setDirection(d);
      stops.direction = d;
    };

    useEffect(() => {
      fetch(`https://api.tfl.gov.uk/Line/${line}/StopPoints`)
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
          <p>Stops on route: {stops.length} (direction: {direction} )</p> 
          <button onClick={() => handleDirection('inbound')} >Inbound</button>
          <button onClick={() => handleDirection('outbound')} >Outbound</button> 
          <button onClick={() => handleDirection('all')} >All</button>
        </div>
            { stops.map(item => {
            return (
            //console.log(item),
                <Link key={Math.random()} to={`/${m}/${line}/${item.id}`}className="stops-card">
                    <p>{item.commonName}</p>
                    <p>{item.icsCode}</p>
                    <small>{item.lat} / {item.lon}</small>
                    <small>Stop ID: {item.id}</small>
                </Link>
            )}
            )}
               
           
      </div>
    )
  
}

export default Stops