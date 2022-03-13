// import React from 'react';
import Attempt from './component/Attempt';

import './App.css';

function App() {
  const attempts = {
    first: {
      attempt: '',
      direction: '',
      distance: '',
      population: '',
      percentage: '',
    },
    second: {
      attempt: '',
      direction: '',
      distance: '',
      population: '',
      percentage: '',
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Globle
        Mr. Worldwide

        {Object.keys(attempts).map((attempt, i) => {
          console.log(attempt)
          return <Attempt attempt={attempt} index={i} />
        })}

      </header>
    </div>
  );
}

export default App;
