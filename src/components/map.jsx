import React, {useEffect, useState} from 'react'

const MapEmbed = ({ lon, lat }) => {


    return (
        <>
        <iframe src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;z=14&amp;output=embed`}></iframe>
        </>
    )


}

export default MapEmbed 