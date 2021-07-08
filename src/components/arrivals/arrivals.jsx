import React, {useState, useEffect} from 'react'
import ArrivalTime from './arrivalTime'
import useFetch from '../../hooks/useFetch'

const Arrivals = ({ stopCode }) => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);

    useEffect(() => {

    },[]);

    const arrival = data && data.map(ind => (
       <p>Next arrival on {ind.platformName} is the <ArrivalTime stopCode={stopCode}/> {ind.direction} towards {ind.towards} ending at {ind.destinationName}. This is a {ind.lineName} {ind.modeName} service.</p>
       )
    )

    return (
            loading ? <div className="loader"></div> : <>{ arrival }</>  
        )
}

export default Arrivals