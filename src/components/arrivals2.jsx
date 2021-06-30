import React, {useState, useEffect} from 'react'
import ArrivalTime from './arrivalTime'

const Arrivals = ({ platformMode, stopName, stopCode }) => {

    const [arrival, setArrival] = useState(null)

    useEffect(() => {
        fetchArrival();
        //minutes();
    },[]);

    const fetchArrival = async () => {
        const fetchArrival = await fetch(`https://api.tfl.gov.uk/line/${stopName}/arrivals/${stopCode}`);
        const data = await fetchArrival.json();
        setArrival(data);
    }

    
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

    return (
        <>
            <p>Arrivals</p>
            {arrival && arrival.map(arr => (
                <div key={Math.random()}>
                <p>Next arrival {platformMode && platformMode.includes('/bus/') ? 'at stand' : 'on'} {arr.platformName} is the *time* {arr.direction} towards {arr.towards} ending at {arr.destinationName}. This is a {arr.lineName} {arr.modeName} service.</p>
                </div>
            )
            )}
        </>
    )
}

export default Arrivals