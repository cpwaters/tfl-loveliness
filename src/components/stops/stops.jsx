import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import LineIdentifier from './lineIdentifier';

const Stops = ({ amatch, mode }) => {

    const line = amatch;
    const m = mode;

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/Line/${line}/StopPoints`);

    const stn = data && data.map(item => {return item} )
    const [ ...all ] = stn || []; // gives all stations as individual objects inside an array

    //console.log(all)
    const getLines = () => {
      for(let i=0, len=all.length; i<len; i++){
        let a = all[i].lines;
        console.log(a)
        for(let n=0; n<a.length; n++){
          const b = a[n].name;
          return b
        }
        return b
      }
    }

    const c = getLines()

  return(
    loading ? <div className="loader"></div> :
      <div> 
            { data && data.map((item,i) => {
            return (
                <Link key={i} to={`/${m}/${line}/${item.id}`} className="stops-card">
                    <p>{item.commonName}</p>
                    {c}
                </Link>
              )}
            )}
      </div>
    )
}

export default Stops