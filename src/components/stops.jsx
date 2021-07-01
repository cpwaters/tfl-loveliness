import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Stops = ({ amatch, mode }) => {

    const line = amatch;
    const m = mode;
    const [stops, setStops] = useState([{}]);
  

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
       
            { stops.map(item => {
            return (
            
                <Link key={Math.random()} to={`/${m}/${line}/${item.id}`} className="stops-card">
                    <p>{item.commonName}</p>
                </Link>
            )}
            )}
               
           
      </div>
    )
  
}

export default Stops