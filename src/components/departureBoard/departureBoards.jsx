import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Destinations from './destinations';

const DepartureBoard = ({ destinations }) => {

  let destNames = [];
    const [hasDest, setHasDest] = useState(destNames);
    const [isLoading, SetIsLoading] = useState();

    /* Clock Logic */
    const [isClock, setIsClock] = useState();
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
      
      const arrivalObj = arrivals.map(obj => Object.entries(obj).map(([key,val],i) => <div key={i} className={key}>{val}</div>));
    
      // const destinations = [
      //   'Ashburys',
      //   'Gorton',
      //   "Guide Bridge",
      //   'Flowery Field',
      //   'Newton for Hyde',
      //   'Godley',
      //   'Hattersley',
      //   'Broadbottom',
      //   'Dinting',
      //   'Glossop',
      //   'Hadfield'
      // ];

      


      // destinations.map((statID, i) => {
      //   //const { data, loading } = useFetch(`https://api.tfl.gov.uk/stoppoint/${statID}`);
      //   destNames.push(data);
      // })

      //console.log(destinations)

      //const {data, loading} = useFetch(`https://api.tfl.gov.uk/stoppoint/${ds}`)


      let cad = '';
      hasDest.map((d,i) => i === 0 ? cad += d : cad += ", " + d);
  
    return ( 
        isLoading ? <div className="loader"></div> :
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
              
              <Destinations destinations={destinations} />
              <div className="clock">{isClock}</div>
            </div>
          </div>
        </div>
        </>
    );
}

export default DepartureBoard;