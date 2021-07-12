import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'

const ArrivalTime = ({ stopCode }) => {

  const { data, loading } = useFetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);

useEffect(() => {
 
},[])

console.log(data)

  return (
      <>
      {loading ? <div className="loader"></div> : 
        data && data.map(at => 
        at.sort((a,b) => (a.timeToStation > b.timeToStation ? 
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
        : null)
        )
        )
      }
     </>
  )
}

export default ArrivalTime