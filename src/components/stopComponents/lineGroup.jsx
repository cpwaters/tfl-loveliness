import React from 'react'
import LineIdentifier from './lineIdentifier'

const LineGroup = ({ lg }) => {
    return ( 
        <>
        <div key={Math.random()}> 
          <p >{ lg.naptanIdReference }</p> 
          <p >{ lg.stationAtcoCode }</p> 
        </div>
        {lg && lg.lineIdentifier.map(li => (
            <LineIdentifier li={li} />
            )
        )}
        </>
    );
}
 
export default LineGroup;