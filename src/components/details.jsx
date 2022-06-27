import React,{ useEffect, useState } from 'react'
import Stations from './stops/stations'
import Stops from './stops/stops'
import Route from './route/route'
import useFetch from '../hooks/useFetch'
import RouteMap from './routeMap'

const Details = ({ match }) => {

  const routeNumber = match.params.id;
  const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${routeNumber}`);

  console.log();

  const win = window.innerWidth;

  useEffect(() => {

  }, []);

  return(
    loading ? <div className="loader"></div> :
      <div className="details">
        <div className="details_header">
          <div className="details_header-left">
            {/* <h2>Page Name: details.jsx</h2> */}
            <h2>{data && data[0].name}</h2>
            {/* <p>Line name: {data && data[0].name}</p>   */}
            {/* <p>Mode of transit: {data && data[0].modeName}</p>    */}
          </div> 
          {match.path.includes('/bus/') ? 
          <div className="details_header-right-one">
            <h1>{data[0].name}</h1>
          </div> :
          <div className="details_header-right-two">
            <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${data[0].id}.png`} alt={`${data[0].name} corporate logo`} />
          </div>
          }
        </div>
        {/* <RouteMap routeNumber={routeNumber}/> */}
        {win >= 768 ? <Route routeNumber={routeNumber} /> : null }
        <Stops mode={data[0].modeName} detail={data} amatch={match.params.id} /> 
        {/* <Stations detail={detail} amatch={match.params.id} />   */}
            
      </div>
    )
  
}

export default Details