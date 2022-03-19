import Country from '../interface/country';

const distance = function(country: Country, solution: Country, imperial = false) {
  const lat1 = parseFloat(country.latitude) * Math.PI / 180;
  const lon1 = parseFloat(country.longitude) * Math.PI / 180;
  const lat2 = parseFloat(solution.latitude) * Math.PI / 180;
  const lon2 = parseFloat(solution.longitude) * Math.PI / 180;
  const dlon = lon2 - lon1;
  const dlat = lat2 - lat1;
  const a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2),2);           
  const c = 2 * Math.asin(Math.sqrt(a));
  const r = imperial? 3956: 6371 ; //miles vs km
  return c * r
}

export default distance;