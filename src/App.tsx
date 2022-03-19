// import ReactTooltip from "react-tooltip";
import React, { useState, useEffect } from "react";
import Map from "./component/map/Map";
import Attempt from './component/attempt/Attempt';
import AnswerInput from "./component/answerInput/answerInput";


import solutionToday from "./util/solutionToday";

import Country from "./interface/country";

// css
import './App.css';

function App() {
  // const [countries, setCountries] = useState(['CA']);
  // const countries = _countries as Country[];
  const [solution, setSolution] = useState(solutionToday());
  const [attempts, setAttempts] = useState(
    new Array(6).fill({
      country: '',
      distance: 0,
      direction: '',
    })
  );
  
  useEffect(() => {
    // request the solution every 10 seconds
    const interval = setInterval(() => {
      setSolution(solutionToday());
      console.log(solution);
    }, 10000);

    setAttempts([
      {
        country: 'CA',
        distance: 0,
        direction: '',
      },
      ...attempts.slice(1)
    ]);

    return () => {
      // unmount interval to prevent memory leak
      clearInterval(interval);
    }
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
