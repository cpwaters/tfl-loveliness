import React from 'react'
import { Link } from 'react-router-dom'
import { unhyphen } from '../apiFunctions';

const LineIdentifier = ({ li, mode }) => {
    return ( 
            <Link className="btn" key={Math.random()} to={`/${mode}/${li}`}>{ unhyphen(li) }</Link>
     );
}
 
export default LineIdentifier;