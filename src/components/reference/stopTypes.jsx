import React, {useState, useEffect} from 'react'

const StopTypes = () => {

    const [stopTypes, setStopTypes] = useState(0)

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/StopPoint/meta/stoptypes`)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setStopTypes(data);
        });
      }, []);

//console.log(placeCat)

    return ( 
        <>
            <h2>Stop Point Stop Types</h2> 
            <p>Endpoint: /StopPoint/meta/stoptypes</p>
            {stopTypes && stopTypes.map(type =>
                <div>{type}</div>
            )}
        </>
    );
}
 
export default StopTypes;