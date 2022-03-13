// import React from 'react';
import Attempt from './component/attempt/Attempt';
import './App.css';
import canadaCities from './data/canada/canadaCities.json';
import usCities from './data/us/usCities.json';
import worldCities from './data/world/worldCities.json';

function App() {
  const attempts = {
    first: {
      city: '',
      lat: '',
      lng: '',
      pop: ''
    },
    second: {
      city: '',
      lat: '',
      lng: '',
      pop: ''
    },
    third: {
      city: '',
      lat: '',
      lng: '',
      pop: ''
    },
    fourth: {
      city: '',
      lat: '',
      lng: '',
      pop: ''
    },
    fifth: {
      city: '',
      lat: '',
      lng: '',
      pop: ''
    },
    sixth: {
      city: '',
      lat: '',
      lng: '',
      pop: ''
    },
  }

  console.log(canadaCities);
  console.log(usCities);
  console.log(worldCities);

  return (
    <div className="App">
      <header className="App-header">
        Globle
        Mr. Worldwide

        {Object.keys(attempts).map((attempt, i) => {
          console.log(attempt)
          return <Attempt key={i} attempt={attempt} index={i} />
        })}

      </header>
    </div>
  );
}

export default App;
