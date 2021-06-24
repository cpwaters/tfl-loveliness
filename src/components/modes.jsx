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
    <>
    <p>Modes of transport around the network</p>
    { modes && modes.map((mode) => (  
      <Link key={mode.modeName} to={`/${mode.modeName}`} >
          <p className="modes">{mode.modeName.includes('-') ? mode.modeName.replace('-', ' ') : mode.modeName}</p>
      </Link>
    )
    )}
    </>
);
}

export default Modes