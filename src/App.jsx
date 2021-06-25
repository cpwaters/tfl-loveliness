import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Modes from './components/modes'
import Details from './components/details'
import Mode from './components/mode'
import Stop from './components/stop'
import './styles/global.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {

  const [modes, setModes] = useState(null)

    useEffect(() => {
      fetchModes();
    },[]);

    const fetchModes = async () => {
      const fetchModes = await fetch(
        `https://api.tfl.gov.uk/line/meta/modes`
      );
      const data = await fetchModes.json();
        setModes(data);
    }

    
  return (
    <Router>
      <div className="App">
        <Navbar modes={modes}/>
        <div className="App-inner">
          <Switch>
            <Route exact path="/"><Modes /></Route>
            { modes && modes.map((mode) => (<Route key={mode.modeName} exact path={`/${mode.modeName}`}><Mode name={mode.modeName} /></Route>) )}
            { modes && modes.map((mode) => (<Route key={mode.modeName+'id'} exact path={`/${mode.modeName}/:id`} component={Details} />) )}
            { modes && modes.map((mode) => (<Route key={Math.random()} exact path={`/${mode.modeName}/:id/:stop`} component={Stop} />) )}
          </Switch>
        </div>
      </div>  
    </Router>
  )
}

export default App
