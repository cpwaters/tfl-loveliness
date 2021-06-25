import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Modes = () => {

    const [modes, setModes] = useState(null)

    //const all = 'https://api.tfl.gov.uk/stoppoint/mode/tube?app_key=df4ab9f710a9441d996a91528d8603ac';
  
  useEffect(() => {
    fetch('https://api.tfl.gov.uk/line/meta/modes')
    .then(res => {
      return res.json();
    })
    .then((data) => {
     setModes(data);
    })
  },[])

return(
    <div className="modes">
    <h2>Modes of transport around the network</h2>
    { modes && modes.map((mode) =>  
      {
        if(mode.modeName.includes('-')){
            return (<Link className="btn" key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName.replace('-', ' ')}</Link>)
        }
        if(mode.modeName.includes('dlr')){
            return (<Link className="btn" key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName.replace('dlr', 'Docklands Light Railway (DLR)')}</Link>)
        }
        if(mode.modeName.includes('tflrail')){
            return (<Link className="btn" key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName.replace('tflrail', 'TfL Rail')}</Link>)
        }else {
            return(<Link className="btn" key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName}</Link>)
        }
    }    
    )}
    </div>
);
}

export default Modes