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
        <div>
        <p>{ name } routes on the network</p>
            { states && states.map((state) => (
                <Link key={state.id} to={`/${state.modeName}/${state.id}`} >
                    <p className="modeButton">{state.name}</p>
                </Link>
            ))}
        </div>
        );
}

export default Mode