import Country from "./country";

export default interface Attempt {
  country: Country,
  percentage: number,
  direction: number,
}