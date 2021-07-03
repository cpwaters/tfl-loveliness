import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Direction from '../direction'
import RouteSections from './routeSections'


const Route = ({ routeNumber }) => {

    const [route, setRoute] = useState(0)

    const [direction, setDirection] = useState('inbound');

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/line/${routeNumber}/route`)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setRoute(data);
        });
      }, []);


    return ( 
        <div className="route">
            <Direction direction={direction} setDirection={setDirection}/>
            {route && route.routeSections.map(sec => (
                direction === sec.direction ?
            <p key={Math.random()} className="direction"><span>{direction}</span> journey from <Link to={`${routeNumber}/${sec.originator}`} >{sec.originationName}</Link> terminating at <Link to={`${routeNumber}/${sec.destination}`} >{sec.destinationName}</Link></p> 
                : null
                )
            )}
        </div>
    
    );
}
 
export default Route;