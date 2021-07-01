import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import RouteSections from './routeSections'


const Route = ({ routeNumber }) => {

    const [route, setRoute] = useState(0)
    const [direction, setDirection] = useState('inbound');
    const highlight = document.querySelectorAll('.direction_filter button');

    if (direction === 'inbound') {
        highlight[0] && highlight[0].classList.add("active");
        highlight[1] && highlight[0].classList.remove("active");
        console.log(direction)
    }else if (direction === 'outbound') {
        highlight[1] && highlight[1].classList.add("active");
        highlight[0] && highlight[0].classList.remove("active");
        console.log(direction)
    }

    const handleDirection = (d) => {    
        setDirection(d);
      };

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
             <div className="direction_filter">
                <button onClick={() => handleDirection('inbound')} >Inbound</button>
                <button onClick={() => handleDirection('outbound')} >Outbound</button> 
            </div>
            {route && route.routeSections.map(sec => (
                direction === sec.direction ?
                    <p>from <Link to={`${routeNumber}/${sec.originator}`} >{sec.originationName}</Link> terminating at <Link to={`${routeNumber}/${sec.destination}`} >{sec.destinationName}</Link></p> 
                : null
                )
            )}
               
        
        </div>
    
    );
}
 
export default Route;