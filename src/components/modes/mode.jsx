import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Filter from '../../filters/order'

const Mode = ({ name }) => {

    const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/mode/${name}`);

    useEffect(() => {
        
    },[]);

    const btn = data && data.map(ind => (
        
        name === 'tube' ? <Link className={`${ind.id} btn`} key={Math.random()} to={`/${name}/${ind.id}`} >{ind.id}</Link> : 
        <Link className="btn corporateBlue" key={Math.random()} to={`/${name}/${ind.id}`} >{ind.id}</Link> 
    ))

    const renderName = () => {
        if(name.includes('-')){
            return ( <h2 style={{textTransform: 'capitalize'}} >{ name.replace('-', ' ') } routes on the network</h2> )
        }
        if(name.includes('dlr')){
            return ( <h2 style={{textTransform: 'capitalize'}} >{ name.replace('dlr', 'Docklands Light Railway (DLR)') } routes on the network</h2> )
        }
        if(name.includes('tflrail')){
            return (<h2 style={{textTransform: 'capitalize'}} >{ name.replace('tflrail', 'TfL Rail') } routes on the network</h2> )
        }else {
            return(<h2 style={{textTransform: 'capitalize'}} >{ name } routes on the network</h2>)
        }
    }
    return(
        loading ?<div className="loader"></div> : 
        <div className="mode">
            <div className="mode_header">
            {renderName()} 
                <img className="details_header-right-two-logo" src={window.location.origin + `/src/assets/${name}.png`} alt={`${name} corporate logo`} />
            </div>
            <p>mode</p>
        
            {/* {loading ? <div className="loader"></div> : <Filter name={name} modeObjId={filter} />}  */}
            { btn }
                
        </div>
        );
}

export default Mode