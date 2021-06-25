import React from 'react'
import LineIdentifier from './lineIdentifier'
import '../../styles/_lineModeGroup.scss'

const LineModeGroups = ({ lmg, lat, lon }) => {
    return ( 
        <>
        <div className="lineModeGroups" key={Math.random()}> 
            <img src={window.location.origin + `/src/assets/${lmg.modeName}.png`} alt="" />
            <p >Change here for other { lmg.modeName } services</p> 
            {lmg && lmg.lineIdentifier.map(li => (
                <LineIdentifier key={Math.random()} lat={lat} lon={lon} li={li} />
                
                )
            )}
        </div>
        <hr />
        </>
    );
}
 
export default LineModeGroups;