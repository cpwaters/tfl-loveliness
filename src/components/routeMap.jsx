import React from 'react'
import useFetch from '../hooks/useFetch'

const routeMap = ({ routeNumber }) => {

    const { RouteNumData } = useFetch(`https://api.tfl.gov.uk/line/${routeNumber}/route`);
    //const { StopCodeData } = useFetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}`);

    let fromLon = ''; 
    let fromLat = '';
    let toLon = '';
    let toLat = ''

    console.log('routeNumData: ',RouteNumData);
    //console.log('StopCodeData: ',StopCodeData);
;
    return (
        <div className="map">
            {/* <iframe src={`https://maps.google.com/maps?q=${fromLon},${fromLat}&to=${toLon},${toLat}&output=embed`}></iframe> */}
            <iframe src={`https://maps.google.com/maps?origin=${fromLon},${fromLat}&destination=${toLon},${toLat}&output=embed`}></iframe>
        </div>
    )


}

export default routeMap 