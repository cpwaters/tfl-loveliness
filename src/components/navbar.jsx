import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ modes }) => {
    
    return ( 
        <nav className="navbar">
            <a href="/"><h1 className="title">TfL-loveliness.com</h1></a>
            <div className="navbar_links">
                { modes && modes.map((mode) => 
                {
                    if( mode.modeName.includes('interchange-keep-sitting') || mode.modeName.includes('interchange-secure') ){
                        return(null);
                    }
                    if(mode.modeName.includes('-')){
                        return (
                            <Link className="tooltip" key={mode.modeName} to={`/${mode.modeName}`}>
                                <img className="navbar_small_logo tooltip" src={`/${mode.modeName}.png`} alt={`${mode.modeName} corporate logo`} />
                                <p className="tooltiptext">{mode.modeName.replace('-', ' ')}</p>
                                <div>{mode.modeName.replace('-', ' ')}</div>
                            </Link>
                        )
                    }
                    if(mode.modeName.includes('dlr')){
                        return (
                            <Link className="tooltip" key={mode.modeName} to={`/${mode.modeName}`}>
                                <img className="navbar_small_logo" src={`/${mode.modeName}.png`} alt={`${mode.modeName} corporate logo`} />
                                <p className="tooltiptext">{mode.modeName.replace('dlr', 'Docklands Light Railway (DLR)')}</p>
                                <div>{mode.modeName.replace('dlr', 'Docklands Light Railway (DLR)')}</div>
                            </Link>
                        )
                    }
                    if(mode.modeName.includes('tflrail')){
                        return (
                            <Link className="tooltip" key={mode.modeName} to={`/${mode.modeName}`}>
                                <img className="navbar_small_logo" src={`/${mode.modeName}.png`} alt={`${mode.modeName} corporate logo`} />
                                <p className="tooltiptext">{mode.modeName.replace('tflrail', 'TfL Rail')}</p>
                                <div>{mode.modeName.replace('tflrail', 'TfL Rail')}</div>
                            </Link>
                        )
                    } else {
                        return(
                            <Link className="tooltip" key={mode.modeName} to={`/${mode.modeName}`}>
                                <img className="navbar_small_logo" src={`/${mode.modeName}.png`} alt={`${mode.modeName} corporate logo`} />
                                <p className="tooltiptext">{mode.modeName}</p>
                                <div>{mode.modeName}</div>
                            </Link>
                        )
                    }
                    
                }
                )}
                <Link className="departure_board" to="/departureBoards">Departure Board</Link>
                <Link className="reference_link" to="/reference">Reference</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;