import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'

const ArrivalTime = ({ stopCode }) => {

  const { data, loading } = useFetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);

  const [isClock, setIsClock] = useState()

 console.log(data)

  const renderName = (x) => {
    if(x * 60 === 0) {return("Arrived")}
    if(x * 60 < 60 ){return ( x * 60 + " Seconds")}
    if(x === 1 ){return ( x + " Minute")}
    if(x > 1 ){return (x + " Minutes")}
    
  }

  //const tts = data && data.map(time => (time))
  //console.log(tts)
  //const orderedList = tts && tts.sort((a,b) => a.timeToStation > b.timeToStation ? 1 : -1);


  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      let h = time.getHours();
      let m = time.getMinutes();
      let s = time.getSeconds();
      h = h <= 9 ? "0"+h : h ;
      m = m <= 9 ? "0"+m : m ;
      s = s <= 9 ? "0"+s : s ;
      let theClock = `${h}:${m}:${s}`;
      setIsClock(theClock);
  },10);
  },[])
  
  const arrivals = [
    {
      order: '1st',
      time: '15:00',
      destination: 'Hadfield',
      //destination: 'data && data[0].towards',
      expected: 'On time'
    },
    {
      order: '2st',
      time: '17:00',
      destination: 'Hadfield',
      expected: '17:11'
    },
  ];
  
  const arrivalObj = arrivals.map(obj => Object.entries(obj).map(([key,val]) => <div className={key}>{val}</div>));

  const destinations = [
    'Ashburys',
    'Gorton',
    "Guide Bridge",
    'Flowery Field',
    'Newton for Hyde',
    'Godley',
    'Hattersley',
    'Broadbottom',
    'Dinting',
    'Glossop',
    'Hadfield'
  ];
  
  let cad = '';
  destinations.map((d,i) => i === 0 ? cad += d : cad += ", " + d);

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

        <div className="board-frame">
          <div className="board-frame-inner">
            <div className="board-screen-outer">
              <div className="arrival">
              <div className="singleArrival">{arrivalObj[0]}</div>
                <div className="callingAtStrip"> 
                    <div className="callingAt">Calling at: </div>
                    <div className="callingAtDestinations">{cad}</div>
                </div>
                <div className="singleArrival">{arrivalObj[1]}</div>
              </div>
              
            
              <div className="clock">{isClock}</div>
            </div>
          </div>
        </div>
     </>
  )
}

export default ArrivalTime