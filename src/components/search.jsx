import React, {useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch'

const Search = () => {

    // const { data, loading } = useFetch(`https://api.tfl.gov.uk/swagger/docs/v1`);

    // console.log(data)

    // TODO's 
        // handleChange needs to hit the api to search for whatever is inputted 
        // may need to scale just to modes, lines, stations/stops, 

    const handleChange = () => {

    }

    useEffect(() => {
    
    },[]);

    return (
    <>  
        <input type="text" placeholder="Search..." onChange={handleChange}/>
    </> 
    );
}
 
export default Search;