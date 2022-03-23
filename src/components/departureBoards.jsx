import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const Departure = ({ stopName, stopCode }) => {

    stopName = 'bakerloo';
    stopCode = '940GZZLUBST';

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${stopName}/Arrivals/${stopCode}`);

    const anc = data && data.map((x,i) => (
        <p>{x}</p>
    ))

    //data && data.map((ind,i) => console.log(ind))
    
    return ( 
        loading ? <div className="loader"></div> :
        <>
            <span>Time Table: Coming Soon</span>
            {anc}
        </>
    );
}

export default Departure;