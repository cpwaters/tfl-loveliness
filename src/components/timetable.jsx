import React, {useState, useEffect} from 'react'

const Timetable = ({ stopCode }) => {

    const [timetable, setTimetable] = useState(0)

useEffect(() => {
    fetchTimetable();
},[]);

const fetchTimetable = async () => {
    const fetchTimetable = await fetch(`https://api.tfl.gov.uk/line/{id}/timetable/{fromStopPointId}`);
    const data = await fetchTimetable.json();
    setTimetable(data);
}

    return ( 
        <div>
            <span>Time Table</span>
        </div>
     );
}
 
export default Timetable;