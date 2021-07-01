import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineModeGroups from './stops/lineModeGroups';
//import Stops from 'apiFunctions';
import MapEmbed from './map'
import Arrivals from './arrivals2'
import Timetable from './timetable'
import ArrivalTime from './arrivalTime'
import Places from './places/places'

const Stop = ({ match }) => {

  //console.log(match)
    const platformMode = match.path
    const stopName = match.params.id
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

            {/* <Arrivals platformMode={platformMode} stopName={stopName} stopCode={stopCode}/> */}
           

            {/* <Places stopCode={stopCode} /> */}

            {/* <Places stopCode={stopCode}/> */}
            <Timetable />

            <h3>Other services from this stop : </h3>
            {stop && stop.lineModeGroups.map(lmg => (
                <LineModeGroups lat={stop.lat} lon={stop.lon} key={Math.random()} lmg={lmg} />
                ))   
            }

            <ArrivalTime stopCode={stopCode}/>

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