import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'

const Places = ({ stopCode }) => {

    const { data, loading } = useFetch(``);

    const [place, setPlace] = useState(0)

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/borough`)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setPlace(data);
        });
      }, []);

console.log(place)

    return ( 
        <>
        {place && place.map(ind => 
            <ul>
                <li>{ind}</li>
            </ul>
            )}
        </>
     );
}
 
export default Places;