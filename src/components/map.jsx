import React, {useEffect, useState} from 'react'

const MapEmbed = ({ lon, lat }) => {


    return (
        <div className="map">
            <iframe src={`https://maps.google.com/maps?q=${lat},${lon}&output=embed`}></iframe>
        </div>
    )


}

export default MapEmbed 