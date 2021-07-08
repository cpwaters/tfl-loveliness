import React, { useEffect } from 'react'

const Direction = ({ direction, setDirection }) => {
    
    const handleDirection = (d) => {    
        setDirection(d);
      };

    useEffect(() => {
        const highlight = document.querySelectorAll('.direction_filter button');
        highlight[0] && highlight[0].classList.add("active");
        if (direction === 'inbound') {
            highlight[0] && highlight[0].classList.add("active");
            highlight[1] && highlight[1].classList.remove("active");
        }else if (direction === 'outbound') {
            highlight[1] && highlight[1].classList.add("active");
            highlight[0] && highlight[0].classList.remove("active");
        }
    }, [handleDirection])

    return ( 
        <div className="direction_filter">
            <button onClick={() => handleDirection('inbound')} >Inbound</button>
            <button onClick={() => handleDirection('outbound')} >Outbound</button> 
        </div>
     );
}
 
export default Direction;


