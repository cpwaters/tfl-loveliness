import React,{ useEffect, useState } from 'react'

const AllApiCalls = () => {

    const modes = 'https://api.tfl.gov.uk/line/meta/modes';
    modes.forEach((mode) => {
        return mode;
    });

    const lineId = 0;
    const route = 0;
    


    const line = `https://api.tfl.gov.uk/line/${lineId}`;
    const lineRoute = `https://api.tfl.gov.uk/line/${lineId}/${route}`;
    const lineRouteModeSelect = `https://api.tfl.gov.uk/Line/Mode/${modes}/${route}`;

    const stopsOnLine = `https://api.tfl.gov.uk/Line/${line}/StopPoints`;


    return(
        <p>{mode}</p>
    );



}

export default AllApiCalls