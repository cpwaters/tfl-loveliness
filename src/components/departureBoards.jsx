import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const DepartureBoard = ({ lineId, stopName, fromStopCode, toStopCode }) => {

    lineId = 'northern';
    fromStopCode = '940GZZLUMDN' // Morden
    toStopCode = '940GZZLUEGW' // Edgeware Rd

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${lineId}/timetable/${fromStopCode}/to/${toStopCode}`);
    //const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/northern/timetable/940GZZLUMDN/to/940GZZLUEGW`);

    console.log(data && data.timetable);
    
    // stops and time to stop is:
    // data.timetable.routes[x].stationIntervals[x].intervals[x].stopId => "940GZZLUMDN" ;
    // data.timetable.routes[x].stationIntervals[x].intervals[x].timeToArrival => 2 (number in minutes);


    /* Logic */
    const [isClock, setIsClock] = useState()

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
        loading ? <div className="loader"></div> :
        <>
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
    );
}

export default DepartureBoard;