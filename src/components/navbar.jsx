import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ modes }) => {
    
    return ( 
        <nav className="navbar">
            <a href="/"><h1>TfL-loveliness.com</h1></a>
            <div className="navbar_links">
                { modes && modes.map((mode) => 
                {
                    if(mode.modeName.includes('-')){
                        return (<Link key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName.replace('-', ' ')}</Link>)
                    }
                    if(mode.modeName.includes('dlr')){
                        return (<Link key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName.replace('dlr', 'Docklands Light Railway (DLR)')}</Link>)
                    }
                    if(mode.modeName.includes('tflrail')){
                        return (<Link key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName.replace('tflrail', 'TfL Rail')}</Link>)
                    }else {
                        return(<Link key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName}</Link>)
                    }
                }
                )}
                <Link to="/elizabeth">The Elizabeth Line &amp; Crossrail</Link>
                <Link to="/reference">Reference</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;