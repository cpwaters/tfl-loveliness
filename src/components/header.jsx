import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
        <div className="global_header">
            <Link to={`/`}>
                <img src={`/tfl1.png`} alt={`Transport for London corporate logo`} />
            </Link>
            <h2>Unofficial network app</h2>
        </div>
    )

export default Header 