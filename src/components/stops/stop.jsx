import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineModeGroups from './lineModeGroups';
//import * from 'apiFunctions';
import MapEmbed from '../map'
import Arrivals from '../arrivals/arrivals2'
import Timetable from '../timetable'
import ArrivalTime from '../arrivals/arrivalTime'
import Places from '../places/places'
import useFetch from '../../hooks/useFetch'

const Stop = ({ match }) => {

  const platformMode = match.path
  const stopName = match.params.id
  const stopCode = match.params.stop;

  //console.log(match)

  const { data, loading } = useFetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}`);

  useEffect(() => {
  
    }, []);

  return(
    loading ? <div className="loader"></div> :
      <div className="stops"> 
            <h2>{ data.commonName } - {data.stopType && data.stopType.replace(/([a-z])([A-Z])/g, '$1 $2') }</h2> 
            <MapEmbed lat={data.lat} lon={data.lon} />

            {/* <Arrivals platformMode={platformMode} stopName={stopName} stopCode={stopCode}/> */}
           

            {/* <Places stopCode={stopCode} /> */}

            {/* <Places stopCode={stopCode}/> */}
            
            <Timetable stopName={stopName} stopCode={stopCode} />

            <h3>Other services from this stop : </h3>
            {data && data.lineModeGroups.map(lmg => (
                <LineModeGroups lat={data.lat} lon={data.lon} key={Math.random()} lmg={lmg} />
                ))   
            }

            <ArrivalTime stopCode={stopCode}/>

            <div className="stn-info-ftr">
                <p>Id: { data.id }</p> 
                <p>Hub Naptan Code: { data.hubNaptanCode }</p> 
                <p>Naptan Id: { data.naptanId }</p> 
                <p>ICS Code: { data.icsCode }</p> 
                <p>Latitude: { data.lat }</p> 
                <p>Longitude: { data.lon }</p> 
                <p>Place Type: { data.placeType }</p> 
                <p>Status: { data.status }</p> 
                
                {/* <p>Modes:  { data && data.modes }</p> */}
            </div>
            {/* <p>Line Group : </p>{data && data.lineGroup.map(lg => (
                <LineGroup key={Math.random()} lg={lg} />
                ))
            } */}
            
           
      </div>
    )
  
}

export default Stop