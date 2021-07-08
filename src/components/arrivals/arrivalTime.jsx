import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'

const ArrivalTime = ({ stopCode }) => {

  const { data, loading } = useFetch(``);

const [arrivalTime, setArrivalTime] = useState(0)

const url = `https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`


useEffect(() => {
    fetchArrivalTime();
},[])

const fetchArrivalTime = async () => {
    const fetchArrivalTime = await fetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);
    const data = await fetchArrivalTime.json();
    // data.map(time => {
    //     let tim = new Date(time.expectedArrival)
    //     let tom = tim.toTimeString()
    //     let tam = tom.slice(0,5)
    //     setArrivalTime(tam)
    // })
    setArrivalTime(data)
}


// useEffect(() => {
//     const intervalId = setInterval(async () => {  //assign interval to a variable to clear it.
//         const getData = await fetch(url);
//         const data = await getData.json();
//         data.map(time => {
//             let tim = new Date(time.expectedArrival)
//             let tom = tim.toTimeString()
//             let tam = tom.slice(0,5)
//             setArrivalTime(tam)
//         })
//     },60000)
  
//     return () => clearInterval(intervalId); //This is important
   
//   }, [url, setArrivalTime])

//console.log(arrivalTime)

  return (
      <>
      {arrivalTime && arrivalTime.map(at => 
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
        <li>timeToStation: {at.timeToStation}</li>
        <li>timestamp: {at.timestamp}</li>
        <li>towards: {at.towards}</li>
        <li>vehicleId: {at.vehicleId}</li>
    </ul>
      )}
     </>
  )


}

export default ArrivalTime