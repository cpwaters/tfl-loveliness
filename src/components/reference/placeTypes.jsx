import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'

const PlaceTypes = () => {

    const { data, loading } = useFetch(``);

    const [placeType, setPlaceTypes] = useState(0)

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Place/Meta/placetypes`)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setPlaceTypes(data);
        });
      }, []);

//console.log(placeCat)

    return ( 
        <>
            <h2>Place Types</h2> 
            <p>Endpoint: /Place/Meta/placetypes</p>
            {placeType && placeType.map(type =>
                <div>{type}</div>
            )}
        </>
    );
}
 
export default PlaceTypes;