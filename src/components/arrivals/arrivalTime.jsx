import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import DepartureBoard from '../departureBoards';

const ArrivalTime = () => {

  //const { data, loading } = useFetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);
  //console.log(data)
  // const renderName = (x) => {
  //   if(x * 60 === 0) {return("Arrived")}
  //   if(x * 60 < 60 ){return ( x * 60 + " Seconds")}
  //   if(x === 1 ){return ( x + " Minute")}
  //   if(x > 1 ){return (x + " Minutes")}
  // }
  //const tts = data && data.map(time => (time))
  //console.log(tts)
  //const orderedList = tts && tts.sort((a,b) => a.timeToStation > b.timeToStation ? 1 : -1);

    const lineId = 'northern';
    const fromStopCode = '940GZZLUMDN' // Morden
    const toStopCode = '940GZZLUEGW' // Edgeware Rd

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${lineId}/timetable/${fromStopCode}/to/${toStopCode}`);

    const destinations = [];

    data && data.timetable.routes.map((si,i) => {
      si.stationIntervals.map((staInt,i) => 
        staInt.intervals.map((stoId,i) => {
          destinations.push(stoId.stopId);
        }));
    });

  return (
      <>
      {/*}
      {loading ? <div classNameName="loader"></div> : 
        data && data.map(at => (
          <ul>
            <li>bearing: {at.bearing}</li>
            <li>currentLocation: {at.currentLocation}</li>
            <li>destinationName: {at.destinationName}</li>
            <li>destinationNaptanId: {at.destinationNaptanId}</li>
            <li>direction: {at.direction}</li>
            <li>expectedArrival: {at.expectedArrival}</li>
            <li>id: {at.id}</li>
            <li>lineId: {at.lineId}</li>
            <li>lineName: {at.lineName}</li>
            <li>modeName: {at.modeName}</li>
            <li>naptanId: {at.naptanId}</li>
            <li>operationType: {at.operationType}</li>
            <li>platformName: {at.platformName}</li>
            <li>stationName: {at.stationName}</li>
            <li>timeToLive: {at.timeToLive}</li>
            <li>timeToStation: {Math.floor(at.timeToStation / 60)} minutes</li>
            <li>timestamp: {at.timestamp}</li>
            <li>towards: {at.towards}</li>
            <li>vehicleId: {at.vehicleId}</li>
        </ul>
        )

        )
      } */}

       <DepartureBoard loading={loading} destinations={destinations}/>
     </>
  )
}

export default ArrivalTime