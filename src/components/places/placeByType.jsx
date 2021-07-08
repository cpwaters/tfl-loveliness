import React, {useState, useEffect} from 'react'
import Boroughs from './boroughs'
import useFetch from '../../hooks/useFetch'

const PlaceByType = ({ types }) => {

    const { data, loading } = useFetch(``);

    const [placeByType, setPlaceByType] = useState(0)

    const url = 'https://api.tfl.gov.uk/'
    const endpoint = `/Place/Type/${types}`

    useEffect(() => {
        fetch(url+endpoint)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setPlaceByType(data);
        });
      }, []);

      console.log(placeByType)

    return ( 
        <>
            <p>PlaceByType</p> 
            <Boroughs />
        </>
    );
}
 
export default PlaceByType;