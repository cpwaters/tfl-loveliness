import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const Stops = ({ amatch, mode }) => {

  const line = amatch;
  const { data, loading } = useFetch(`https://api.tfl.gov.uk/Line/${line}/StopPoints`);
  
  const m = mode;
  
  // renames the line name from hyphenated to a normal text string with space
  let rename = amatch;
  const nstr = rename.replace('-',' & ');
  const arr = nstr.split(" ");
  for(let i=0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const nameStr = arr.join(" ");

  // gets first capital letter and number (bus routes e.g. N330 G10 etc)
  const regExLetNum = /([A-Z][0-9])/;
  const regExWord = /[A-Z][a-z]\w+/;

  // get letter from div after loaded
  //const all = data && data.map((item) => console.log(item));
  //console.log(all)

  return(
    loading ? <div className="loader"></div> :
      <div className="stop-list"> 
            { data && data.map((item,i)=> {
            return (
                <Link key={i} to={`/${m}/${line}/${item.id}`} className="stops-card">
                    <p>{item.commonName}</p>
                    {
                      item.lines.map((line, i) => (
                        line.name.match(regExLetNum) || !isNaN(line.name) ? null :
                          !isNaN(line.name) || line.name === nameStr ? null : 
                            <div className={`circle-letter ${line.name.substring(0, 3)}`} key={i}>
                              {line.name.charAt(0)}
                            </div>
                        )
                      )
                    } 
                
                </Link>
              )}
            )}
      </div>
    )
}

export default Stops