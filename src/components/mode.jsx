import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Mode = ({ name }) => {

    const [states, setModeState] = useState(null)

        useEffect(() => {
            fetchMode();
        },[]);

        const fetchMode = async () => {
            const fetchMode = await fetch(`https://api.tfl.gov.uk/line/mode/${name}`);
            const data = await fetchMode.json();
            setModeState(data);
        }

    return(
        <div className="mode">
            <div className="mode-header">
                <h2>{ name } routes on the network</h2>
                <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${name}.png`} alt={`${name} corporate logo`} />
            </div>
            { states && states.map((state) => (
                <Link key={state.id} to={`/${state.modeName}/${state.id}`} >
                    <p className="modeButton">{state.name}</p>
                    {/* <img style={{width:'150px'}} src={window.location.origin + `/src/assets/${state.name}.png`} alt={`${state.name} corporate logo`} /> */}
                </Link>
            ))}
        </div>
        );
}

export default Mode