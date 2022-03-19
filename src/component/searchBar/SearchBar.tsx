import React, { useState } from 'react';

import Country from '../../interface/country';
import _solutions from '../../data/countries/solutions.json'

function SearchBar(props: any) {
  const solutions = _solutions as Country[];

  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    solutions.filter((country) => {
      return country.name.toLowerCase().match(searchInput);
    });
  }

  console.log('solutions', solutions);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Enter Country"
        onChange={handleChange}
        value={searchInput} />
      <div>Country</div>
      <div>
        {/* data.filter(item => item.title.toLowerCase().includes(term.toLowerCase()).map((element, index) => { */}
        {searchInput.length > 0? solutions.filter(country => country.name.toLowerCase().includes(searchInput.toLowerCase())).map((country, index) => {
          console.log(country);
          return <div key={ index }>{country.name}</div>
        }): null}
      </div>
    </div>
  );
}

export default SearchBar;