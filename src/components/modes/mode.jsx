import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Filter from '../../filters/order'
import BusFilter from './busFilter'
import { unhyphen } from '../apiFunctions';

const Mode = ({ name }) => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/mode/${name}`);

    useEffect(() => {
        
    },[]);

    const stdBtn = data && data.map((ind,i) => (
        <Link className={`btn ${name}`} key={i} to={`/${name}/${ind.id}`} >{ unhyphen(ind.id) }</Link>
    ));

    const spanROTN = <span className="mode_header-subtitle">routes on the network</span>;

    const renderName = () => {
        if(name.includes('-')){
        return ( <h2 style={{textTransform: 'capitalize'}} >{ name.replace('-', ' ') } {spanROTN}</h2> )
        }
        if(name.includes('dlr')){
            return ( <h2 style={{textTransform: 'capitalize'}} >{ name.replace('dlr', 'Docklands Light Railway (DLR)') } {spanROTN}</h2> )
        }
        if(name.includes('tflrail')){
            return (<h2 style={{textTransform: 'capitalize'}} >{ name.replace('tflrail', 'TfL Rail') } {spanROTN}</h2> )
        } else {
            return(<h2 style={{textTransform: 'capitalize'}} >{ name } {spanROTN}</h2>)
        }
    }
    return(
        loading ? <div className="loader"></div> : 
        <div className="mode">
            <div className="mode_header">
            {renderName()} 
                <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${name}.png`} alt={`${name} corporate logo`} />
            </div>
            {/* <p>mode</p> */}
            <div className="mode_body">
                {name === 'bus' ? 
                <BusFilter data={data} name={name}/> 
                :  stdBtn }
                {/* {loading ? <div className="loader"></div> : <Filter name={name} modeObjId={filter} />}  */}
            </div>
        </div>
        );
}

export default Mode