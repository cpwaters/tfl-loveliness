import React, {useState, useEffect} from 'react'
import PlaceCats from './placeCategories'
import PlaceTypes from './placeTypes'
import StopTypes from './stopTypes'

const Reference = () => {
    return ( 
    <div className="reference">
        <div className="reference_title">
            <h1>API Reference Page</h1>
            <h2>URL: https://api.tfl.gov.uk/</h2>
        </div>
        <div className="reference_separator"><PlaceCats /></div>    
        <div className="reference_separator"><PlaceTypes /></div>
        <div className="reference_separator"><StopTypes /></div>
    </div>
    );
}
 
export default Reference;