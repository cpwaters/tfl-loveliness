import React,{ useEffect, useState } from 'react'
import Stations from './stations'
import Stops from './stops'

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

  return(
      <div className="details">
        <div className="details_header">
          <div className="details_header-left">
            <h2>{detail && detail[0].name} line details</h2>
            <p>Line name: {detail && detail[0].name}</p>  
            <p>Mode of transit: {detail && detail[0].modeName}</p>   
          </div> 
          {match.path.includes('/bus/') ? 
          <div className="details_header-right-one">
            <h1>{detail[0].name}</h1>
          </div> :
          <div className="details_header-right-two">
            <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${detail[0].id}.png`} alt={`${detail[0].name} corporate logo`} />
          </div>
          }

        </div>
        <Stops mode={detail[0].modeName} detail={detail} amatch={match.params.id} /> 
        {/* <Stations detail={detail} amatch={match.params.id} />   */}
            
      </div>
    )
  
}

export default Details