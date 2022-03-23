import React, {useState, useEffect} from 'react'
import { range } from '../../js/range'
import { Link } from 'react-router-dom'

const busFilter = ({btn, data}) => {

    let allArr = [];
    data && data.map(all => (allArr.push(parseInt(all.name))))
    const sorted = allArr.sort((a,b) => {return a-b})
   
    const filter = (x, y) => {
        const sl = sorted.slice(x,y);
        return sl
    }

    const busNum = filter(0,95);

    const handleFilter = (x,y) => {
        filter(x,y)
    }

    console.log(busNum)

    //let z = filter(0,95)
    //console.log(data)


    return (
        <> 
        <p>Bus Filter</p>
        {/* {one && one.map(a => (<Link className="btn">{a}</Link>))} */}
        <button className="btn" onClick={() => handleFilter(filter(0,95))}>1 - 99</button>
        <button onClick={() => handleFilter(filter(0,95))}>100 - 199</button>
        <button onClick={() => handleFilter(filter(0,95))}>200 - 299</button>
        <button onClick={() => handleFilter(filter(0,95))}>300 - 399</button>
        <button onClick={() => handleFilter(filter(0,95))}>400 - 499</button>
        <button onClick={() => handleFilter(filter(0,95))}>500 - 599</button>
        <button onClick={() => handleFilter(filter(0,95))}>600 - 699</button>
        <button onClick={() => handleFilter(filter(0,95))}>700's</button>
        <button onClick={() => handleFilter(filter(0,95))}>800's</button>
        <button onClick={() => handleFilter(filter(0,95))}>900's</button>
        <button onClick={() => handleFilter(filter(0,95))}>A</button>
        <button onClick={() => handleFilter(filter(0,95))}>B</button>
        <button onClick={() => handleFilter(filter(0,95))}>C</button>
        <button onClick={() => handleFilter(filter(0,95))}>D</button>
        <button onClick={() => handleFilter(filter(0,95))}>E, EI</button>
        <button onClick={() => handleFilter(filter(0,95))}>G</button>
        <button onClick={() => handleFilter(filter(0,95))}>H</button>
        <button onClick={() => handleFilter(filter(0,95))}>K</button>
        <button onClick={() => handleFilter(filter(0,95))}>N 1 - 99</button>
        <button onClick={() => handleFilter(filter(0,95))}>N 100 - 199</button>
        <button onClick={() => handleFilter(filter(0,95))}>N 200 - 299</button>
        <button onClick={() => handleFilter(filter(0,95))}>N 300 - 399</button>
        <button onClick={() => handleFilter(filter(0,95))}>N 400 - 499</button>
        <button onClick={() => handleFilter(filter(0,95))}>N 500 - 599</button>
        <button onClick={() => handleFilter(filter(0,95))}>P</button>
        <button onClick={() => handleFilter(filter(0,95))}>R</button>
        <button onClick={() => handleFilter(filter(0,95))}>S</button>
        <button onClick={() => handleFilter(filter(0,95))}>U</button>
        <button onClick={() => handleFilter(filter(0,95))}>W</button>
        <button onClick={() => handleFilter(filter(0,95))}>X</button>

        </>
     );
}
 
export default busFilter;