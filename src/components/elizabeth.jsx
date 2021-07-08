import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const Elizabeth = ({ name }) => {

    /*
    This is a static component as the Elizabeth line is unfinished and not added to the 'tube' mode
    */

   const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/mode/${name}`);

    useEffect(() => {
    },[]);

return(

    <div className="mode">
        <div className="mode_header">
            <h2>{name} line routes on the network</h2> 
                <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${name}.png`} alt={`${name} corporate logo`} />
        </div>
        <p>Coming Soon!</p>
     </div>


    // <div className="mode">
    //     <div className="mode_header">
    //     {name} 
    //         <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${name}.png`} alt={`${name} corporate logo`} />
    //     </div>
    //     { states && states.map((state) => (
    //         <Link className="btn" key={state.id} to={`/${state.modeName}/${state.id}`} >{state.name}</Link>
    //     ))}
    // </div>
    );
}
 
export default Elizabeth;