import React, {useState, useEffect} from 'react'

const PlaceCats = () => {

    const [placeCat, setPlaceCat] = useState(0)

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Place/Meta/Categories`)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setPlaceCat(data);
        });
      }, []);

//console.log(placeCat)

    return ( 
        <>
            <h2>Place Categories</h2> 
            <p>Endpoint: /Place/Meta/Categories</p>
            {placeCat && placeCat.map(cats =>
              <div>
                  <p>{cats.category}</p>
                  <ul>{cats.availableKeys && cats.availableKeys.map(keys =>
                    <li>{keys}</li>
                    )}
                </ul>
            </div>  
                )}
        </>
    );
}
 
export default PlaceCats;