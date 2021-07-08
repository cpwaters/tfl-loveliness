import React, { useEffect} from 'react'
import useFetch from '../hooks/useFetch'

const Timetable = ({ stopName, stopCode }) => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/${stopName}/timetable/${stopCode}`);

   data && data.map(ind => (
        console.log(ind.timetable)
    ))

    

    useEffect(() => {
       
    },[]);

    //data && data.map(ind => console.log(ind))
    
    return ( 
        loading ? <div className="loader"></div> :
    <span>Time Table: Coming Soon {/* tt */}</span>
    
        
     );
}
 
export default Timetable;