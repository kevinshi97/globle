// import ReactTooltip from "react-tooltip";
import React, { useState, useEffect } from "react";
import Map from "./component/map/Map";
import Attempt from './component/attempt/Attempt';
import AnswerInput from "./component/answerInput/answerInput";

import './App.css';
// import canadaCities from './data/cities/json/canadaCities.json';
// import usCities from './data/cities/json/usCities.json';
// import worldCities from './data/cities/json/worldCities.json';

function App() {
  // const [countries, setCountries] = useState(['CA']);
  const [attempts, setAttempts] = useState(
    new Array(6).fill({
      country: '',
      distance: 0,
      direction: '',
    })
  );
  
  useEffect(() => {
    setAttempts([
      {
        country: 'CA',
        distance: 0,
        direction: '',
      },
      ...attempts.slice(1)
    ]);
  }, []); // Empty array ensures that effect is only run on mount


  return (
    <div className="App">
      <header className="App-header">
        Globle
        Mr. Worldwide

      <Map countries={attempts.map((attempt) => attempt.country)} />

      {Object.keys(attempts).map((attempt, i) => {
        return <Attempt key={i} attempt={attempt} index={i} />
      })}
        
      <AnswerInput />

      </header>
    </div>
  );
}

export default App;
