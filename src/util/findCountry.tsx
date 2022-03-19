import Country from '../interface/country';
import _solutions from '../data/countries/solutions.json'

const findCountry = function (c: String) {
  const potentialSolutions = _solutions as Country[];
  return potentialSolutions.find(country => country.country === c)
}

export default findCountry;