import Country from '../interface/country';
import Direction from '../constants/direction';

const angle = function (country: Country, solution: Country) {
  const lat1 = parseFloat(country.latitude) * Math.PI / 180;
  const lon1 = parseFloat(country.longitude) * Math.PI / 180;
  const lat2 = parseFloat(solution.latitude) * Math.PI / 180;
  const lon2 = parseFloat(solution.longitude) * Math.PI / 180;
  const dLon = (lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  const radian = Math.atan2(y, x);
  const angle = radian * 180 / Math.PI;
  return 360 - (angle + 360) % 360; //angles go clockwise starting from west
}

const direction = function(country: Country, solution: Country) {
  const a = angle(country, solution);
  if (22.5 <= a && a < 67.5) {
    return Direction.northwest;
  } else if (67.5 <= a && a < 112.5) {
    return Direction.north;
  } else if (112.5 <= a && a < 157.5) {
    return Direction.northeast;
  } else if (157.5 <= a && a < 202.5) {
    return Direction.east;
  } else if (202.5 <= a && a < 247.5) {
    return Direction.southeast;
  } else if (247.5 <= a && a < 292.5) {
    return Direction.south;
  } else if (292.5 <= a && a < 337.5) {
    return Direction.southwest
  }
  return Direction.west
}

export default direction;