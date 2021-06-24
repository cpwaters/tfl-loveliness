import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ modes }) => {

    return ( 
        <nav className="navbar">
            <a href="/"><h1>TfL-loveliness.com</h1></a>
            <div className="links">
                { modes && modes.map((mode) => (<Link key={mode.modeName} to={`/${mode.modeName}`}>{mode.modeName}</Link>) )}
            </div>
        </nav>
     );
}
 
export default Navbar;