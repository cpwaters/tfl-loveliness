import React, {useState, useEffect} from 'react'
import ArrivalTime from './arrivalTime'
import useFetch from '../../hooks/useFetch'

const Arrivals = ({ platformMode, stopName, stopCode }) => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${stopName}/arrivals/${stopCode}`);

    useEffect(() => {
    },[]);
    

    const arrival = data && data.map(ind => (
            <p>Next arrival {platformMode && platformMode.includes('/bus/') ? 'at stand' : 'on'} {ind.platformName} is the *time* {ind.direction} towards {ind.towards} ending at {ind.destinationName}. This is a {ind.lineName} {ind.modeName} service.</p>
        )
    )
    // const minutes = () => {
    //     arrival && arrival.map(arr => {
    //         let min = arr.timeToStation
    //         let mins = min / 60
    //         let arrMin = Math.floor(mins)
    //         console.log(arrMin)
    //         return arrMin
    //         }
    //     )
    // }

    /* <p>This service will arrive in {mini} {mini && mini >= 2 ? 'minutes' : 'minute'} </p> */
    //let mini = minutes()
    //console.log(arrival)
    //console.log(platformMode)

    return ( loading ? <div className="loader"></div> : <>{ arrival }</> )
}

export default Arrivals