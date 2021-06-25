import React from 'react'
import { Link } from 'react-router-dom'

const LineIdentifier = ({ li, mode }) => {
    return ( 
            <Link className="btn" key={Math.random()} to={`/${mode}/${li}`}>{ li }</Link>
     );
}
 
export default LineIdentifier;