import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineModeGroups from './stopComponents/lineModeGroups';
//import Stops from 'apiFunctions';
import MapEmbed from './map'

const Stop = ({ match }) => {

    const stopCode = match.params.stop;
    const [stop, setStop] = useState(0)
    
    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setStop(data);
        });
      }, []);
    
      //console.log(stop)


  return(
      <div className="stops"> 
            <h2>{ stop.commonName } - {stop.stopType && stop.stopType.replace(/([a-z])([A-Z])/g, '$1 $2') }</h2> 
            <MapEmbed lat={stop.lat} lon={stop.lon} />

            <h3>Other services from this stop : </h3>
            {stop && stop.lineModeGroups.map(lmg => (
                <LineModeGroups lat={stop.lat} lon={stop.lon} key={Math.random()} lmg={lmg} />
                ))   
            }

            <div className="stn-info-ftr">
                <p>Id: { stop.id }</p> 
                <p>Hub Naptan Code: { stop.hubNaptanCode }</p> 
                <p>Naptan Id: { stop.naptanId }</p> 
                <p>ICS Code: { stop.icsCode }</p> 
                <p>Latitude: { stop.lat }</p> 
                <p>Longitude: { stop.lon }</p> 
                <p>Place Type: { stop.placeType }</p> 
                <p>Status: { stop.status }</p> 
                
                {/* <p>Modes:  { stop && stop.modes }</p> */}
            </div>
            {/* <p>Line Group : </p>{stop && stop.lineGroup.map(lg => (
                <LineGroup key={Math.random()} lg={lg} />
                ))
            } */}
            
           
      </div>
    )
  
}

export default Stop