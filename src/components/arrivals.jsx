import React, {useState, useEffect} from 'react'
import ArrivalTime from './arrivalTime'

const Arrivals = ({ stopCode }) => {

    const [arrival, setArrival] = useState(null)
  
    useEffect(() => {
        fetchArrival();
    },[]);

    const fetchArrival = async () => {
        const fetchArrival = await fetch(`https://api.tfl.gov.uk/stoppoint/${stopCode}/arrivals`);
        const data = await fetchArrival.json();
        setArrival(data);
    }

    return (
        <>
            <p>Arrivals</p>
            {arrival && arrival.map(arr => (
                <>
                <p>Next arrival on {arr.platformName} is the <ArrivalTime stopCode={stopCode}/> {arr.direction} towards {arr.towards} ending at {arr.destinationName}. This is a {arr.lineName} {arr.modeName} service.</p>
                </>
            )
            )}
        </>
    )
}

export default Arrivals