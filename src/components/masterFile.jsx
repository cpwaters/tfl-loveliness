import React, {useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch'

const MasterFile = () => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/swagger/docs/v1`);

    //console.log(data)

    useEffect(() => {
    
    },[]);

    return (
        loading && data ? <div className="loader"></div> : 
    <>  
        <p>{/* getFiles() */}</p>
    </> 
    );
}
 
export default MasterFile;