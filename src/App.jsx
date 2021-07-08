import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Modes from './components/modes/modes'
import Details from './components/details'
import Mode from './components/modes/mode'
import Stop from './components/stops/stop'
import Reference from './components/reference/reference'
import Elizabeth from './components/elizabeth'
import useFetch from './hooks/useFetch'
import './styles/global.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MasterFile from './components/masterFile'


const App = () => {

  const { data, loading } = useFetch(`https://api.tfl.gov.uk/line/meta/modes`);

    useEffect(() => {
    
    },[]);
    
  return (
    <Router>
      <div className="App">
        <Navbar modes={data}/>
        {loading ? <div className="loader"></div> : 
        <div className="App-inner">
          <Switch>
            <Route exact path="/"><Modes /><MasterFile /></Route>
            { data && data.map((mode) => (<Route key={mode.modeName} exact path={`/${mode.modeName}`}><Mode name={mode.modeName} /></Route>) )}
            { data && data.map((mode) => (<Route key={mode.modeName+'id'} exact path={`/${mode.modeName}/:id`} component={Details} />) )}
            { data && data.map((mode) => (<Route key={Math.random()} exact path={`/${mode.modeName}/:id/:stop`} component={Stop} />) )}
            <Route exact path="/elizabeth"><Elizabeth name={'Elizabeth'}/></Route>
            <Route exact path="/reference" component={Reference}></Route>
          </Switch>
        </div>
      }
      </div>  
    </Router>
  )
}

export default App
