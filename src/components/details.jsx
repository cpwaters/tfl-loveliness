import React,{ useEffect, useState } from 'react'
import Stations from './stations'

const Details = ({ match }) => {

    const [detail, setDetails] = useState([{}]);

    useEffect(() => {
      fetch(`https://api.tfl.gov.uk/line/${match.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setDetails(data);
      });
    }, []);

    console.log(detail[0])

  return(
      <div className="details">
        <div className="details_header">
          <div className="details_header-left">
            <h2>{detail && detail[0].name} line details</h2>
            <p>Line name: {detail && detail[0].name}</p>  
            <p>Mode of transit: {detail && detail[0].modeName}</p>   
          </div> 
          {match.path.includes('/bus/') ? 
          <div className="details_header-right">
            <h1>{detail[0].name}</h1>
          </div> :
          <div>
            <img src={`/assets/${detail[0].id}.png`} alt={`${detail[0].name} corporate logo`} />
          </div>
          }

        </div>
        <Stations amatch={match.params.id} />    
      </div>
    )
  
}

export default Details