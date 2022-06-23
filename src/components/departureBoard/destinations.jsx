import React from 'react';
import useFetch from '../../hooks/useFetch'

const Destinations = ({ destinations }) => {


    const desName = (ds) => {
        const {data,loading} = useFetch(`https://api.tfl.gov.uk/stoppoint/${ds}`);
        destNames.push(data);
        SetIsLoading(loading);
      }

      //destinations.map((de,i) => desName(de));

    return (
        <></>
    )
};

export default Destinations;