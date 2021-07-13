import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'

const ArrivalTime = ({ stopCode }) => {

  const { data, loading } = useFetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);

  

{/*

  const [data, setData] = useState(0);
  const [time, setTime] = useState(0)
  const url = `https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`;
  useEffect(() => {
    const intervalId = setInterval(() => {
      data && data.map((t) => setTime(t.timeToStation));
      fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
          setData(data);
      });
    }, 10000)

    return () => clearInterval(intervalId);
      
  },[url, useState])

*/ }

//console.log(data)

  const renderName = (x) => {
    if(x * 60 === 0) {return("Arrived")}
    if(x * 60 < 60 ){return ( x * 60 + " Seconds")}
    if(x === 1 ){return ( x + " Minute")}
    if(x > 1 ){return (x + " Minutes")}
    
  }

  const tts = data && data.map(time => (time))
  //console.log(tts)
  const orderedList = tts && tts.sort((a,b) => a.timeToStation > b.timeToStation ? 1 : -1);

  return (
      <>
      <h1>Live Arrivals</h1>
      {loading ? <div className="loader"></div> :
          orderedList && orderedList.map(time => (
            <div className="arrivals">
            <h1 style={{color: 'red'}}>{renderName(Math.floor(time.timeToStation / 60))}</h1>
            <h3>{time.lineName} service arriving on {time.modeName == 'tube' ? "" : "stand"} {time.platformName} to {time.towards}</h3>
         <ul className="arrivals-data">
            {/* <li>bearing: {time.bearing}</li> */}
            <li>currentLocation: {time.currentLocation}</li>
            <li>destinationName: {time.destinationName}</li>
            {/* <li>destinationNaptanId: {time.destinationNaptanId}</li> */}
            <li>direction: {time.direction}</li>
            {/* <li>expectedArrival: {time.expectedArrival}</li> */}
            {/* <li>id: {time.id}</li> */}
            {/* <li>lineId: {time.lineId}</li> */}
            <li>lineName: {time.lineName}</li>
            <li>modeName: {time.modeName}</li>
            {/* <li>naptanId: {time.naptanId}</li> */}
            {/* <li>operationType: {time.operationType}</li> */}
            <li>platformName: {time.platformName}</li>
            <li>stationName: {time.stationName}</li>
            {/* <li>timeToLive: {time.timeToLive}</li> */}
            <li>timeToStation: {renderName(Math.floor(time.timeToStation / 60))}</li>
            {/* <li>timestamp: {time.timestamp}</li> */}
            <li>towards: {time.towards}</li>
            <li>vehicleId: {time.vehicleId}</li>
          </ul> 
          </div>
          ))
       } 
     </>
  )
}

export default ArrivalTime