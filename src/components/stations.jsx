import React,{ useEffect, useState } from 'react'
import { Switch } from 'react-router-dom';
//import MapEmbed from '../map'

const Stations = ({ amatch }) => {

    const [stops, setStops] = useState({
        stations: []
    });

    const line = amatch;

    useEffect(() => {
      fetch(`https://api.tfl.gov.uk/Line/${line}/Route/Sequence/all`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setStops(data);
      });
    }, []);

    //console.log(stops)

    /*
    const switchReplace = (mode) => {
        switch(expression) {
            case 'DLR Station':
                ''
              break;
            case y:
              // code block
              break;
            default:
              // code block
          }
    }
*/
  return(
      <div>
        <p>Stations/Stops: (direction: { stops && stops.direction })</p> 
        
            { stops.stations.map(item => 
            <div className="stations">
            <p key={item.icsid} >{item.name.replace('DLR Station', '')}</p>
                <small>{item.lat} / {item.lon}</small>
                <small>Stop ID: {item.stationId}</small>
            </div>
            )}
      </div>
    )
  
}

export default Stations