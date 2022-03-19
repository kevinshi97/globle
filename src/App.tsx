// import ReactTooltip from "react-tooltip";
import React, { useState, useEffect } from "react";
import Map from "./component/map/Map";
import AttemptDisplay from './component/attempt/AttemptDisplay';
import SearchBar from "./component/searchBar/SearchBar";

import Country from './interface/country';
import Attempt from './interface/attempt';

import solutionToday from './util/solutionToday';
import findCountry from "./util/findCountry";
import distance from './util/distance';
import direction from "./util/direction";

import './App.css';

function App() {
  // const [countries, setCountries] = useState(['CA']);
  // const countries = _countries as Country[];
  const [solution, setSolution] = useState(solutionToday());
  const [attempts, setAttempts] = useState(
    new Array(6).fill({
      country: {},
      percentage: 0,
      direction: 0,
    } as Attempt)
  );
  
  useEffect(() => {
    // request the solution every 10 seconds
    const interval = setInterval(() => {
      setSolution(solutionToday());
      console.log(solution);
    }, 10000);

    let mock = {
      country: findCountry('CA'),
      percentage: Math.round(100 - distance(findCountry('CA') ?? solution, solution) / 40075 * 100), //40075 is the distance around the earth
      direction: Math.round(direction(findCountry('CA') ?? solution, solution))
    } as Attempt

    setAttempts([
      mock,
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

      <Map countries={attempts.map((attempt) => attempt.country.country)} />

        {attempts.map((attempt, i) => {
          console.log(attempt, findCountry('CA'), i);
          return <AttemptDisplay key={i} index={i} attempt={attempt} />
        })}
        
      <SearchBar />

      </header>
    </div>
  );
}

export default App;
