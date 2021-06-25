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

        const renderName = () => {
            if(name.includes('-')){
                return ( <h2 style={{textTransform: 'capitalize'}} >{ name.replace('-', ' ') } routes on the network</h2> )
            }
            if(name.includes('dlr')){
                return ( <h2 style={{textTransform: 'capitalize'}} >{ name.replace('dlr', 'Docklands Light Railway (DLR)') } routes on the network</h2> )
            }
            if(name.includes('tflrail')){
                return (<h2 style={{textTransform: 'capitalize'}} >{ name.replace('tflrail', 'TfL Rail') } routes on the network</h2> )
            }else {
                return(<h2 style={{textTransform: 'capitalize'}} >{ name } routes on the network</h2>)
            }
        }

    return(
        <div className="mode">
            <div className="mode_header">
            {renderName()} 
                <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${name}.png`} alt={`${name} corporate logo`} />
            </div>
            { states && states.map((state) => (
                <Link className="btn" key={state.id} to={`/${state.modeName}/${state.id}`} >{state.name}</Link>
            ))}
        </div>
        );
}

export default Mode