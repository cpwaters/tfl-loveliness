import React from 'react'
import { Link } from 'react-router-dom'

const LineIdentifier = ({ li }) => {
    return ( 
            <Link className="services" key={Math.random()} to={''}>{ li }</Link>
     );
}
 
export default LineIdentifier;