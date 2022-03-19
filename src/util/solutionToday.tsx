import Country from '../interface/country';
import _solutions from '../data/countries/solutions.json'

let solutionToday = function () {
  const solutions = _solutions as Country[];
  const daysSinceEpoch = Math.floor(Date.now() / 86400000);
  // console.log(Date.now(), daysSinceEpoch, daysSinceEpoch % solutions.length, solutions, solutions[daysSinceEpoch % solutions.length]);
  return solutions[daysSinceEpoch % solutions.length];
}

export default solutionToday;