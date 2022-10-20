import React from 'react'
import LineIdentifier from './lineIdentifier'
import '../../styles/_lineModeGroup.scss'

const LineModeGroups = ({ lmg, lat, lon }) => {

    // TODO's
        // LineIdentifier need sort order

    return ( 
        <>
        <div className="lineModeGroups" key={Math.random()}> 
            <div className="lineModeGroups_header">
                <img src={`/${lmg.modeName}.png`} alt="" />
                <p>Change here for other { lmg.modeName } services</p> 
            </div>
            <div className="lineModeGroups_body">
            {lmg && lmg.lineIdentifier.map((li,i) => (
                <LineIdentifier mode={lmg.modeName} key={i} lat={lat} lon={lon} li={li} />
                )
            )}
            </div>
        </div>
        <hr />
        </>
    );
}
 
export default LineModeGroups;