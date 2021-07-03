import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Filter = ({ name, modeObjId, returnedOrder }) => {

    const getArray = () => {
        let arr = []; 
        modeObjId && modeObjId.map(ind => {
            arr.push(ind);
            }  
        )
        return arr
    }

    const newArr = getArray()

    const handleOrder = (x, n) => {
        let order = 0
        if (x === 'asc'){
            n === 'bus' ? order = newArr.sort(function(a,b) {return a - b}) : order = newArr.sort() ;
        } else {
            n === 'bus' ? order = newArr.sort(function(a,b) {return b - a}) : order = newArr.reverse() ;
        }
       return (order)
    }

    returnedOrder = handleOrder()
    console.log(returnedOrder)

    return (
        <div className="filter"> 
            <div>filter</div> 
            <button onClick={() => handleOrder('asc', name)}>Ascending Order</button>
            <button onClick={() => handleOrder('dsc', name)}>Decending Order</button>
        </div>
    );
}
 
export default Filter;