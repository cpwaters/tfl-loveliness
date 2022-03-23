import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Direction from '../../filters/direction'
import useFetch from '../../hooks/useFetch'
import RouteSections from './routeSections'


const Route = ({ routeNumber }) => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${routeNumber}/route`);

    const [direction, setDirection] = useState('inbound');

    useEffect(() => {
       
      }, []);
      
    return ( 
        loading ? <div className="loader"></div> :
        <div className="route">
            <Direction direction={direction} setDirection={setDirection}/>
            {data && data.routeSections.map((sec,i )=> (
                direction === sec.direction ?
            <p key={i} className="direction"><span>{direction}</span> journey from <Link to={`${routeNumber}/${sec.originator}`} >{sec.originationName}</Link> terminating at <Link to={`${routeNumber}/${sec.destination}`} >{sec.destinationName}</Link></p> 
                : null
                )
            )}
        </div>
    
    );
}
 
export default Route;