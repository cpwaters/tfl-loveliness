import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const Stops = ({ amatch, mode }) => {

    const line = amatch;
    const m = mode;
    
    const { data, loading } = useFetch(`https://api.tfl.gov.uk/Line/${line}/StopPoints`);
  

    useEffect(() => {

    }, []);

  return(
    loading ? <div className="loader"></div> :
      <div> 
            { data && data.map((item,i)=> {
            return (
                <Link key={i} to={`/${m}/${line}/${item.id}`} className="stops-card">
                    <p>{item.commonName}</p>
                </Link>
              )}
            )}
      </div>
    )
}

export default Stops