const fs = require('fs');
const csv=require('csvtojson');

function parseCityFile(input, output, filter) {
  csv()
  .fromFile(input)
  .then((jsonObj)=>{
    let objects = jsonObj.filter((obj) => {
      return filter(obj);
    }).map((obj) => {
        return {
          city: obj['city'],
          lat: obj['lat'],
          lng: obj['lng'],
          pop: obj['population']
        }
    });
    fs.writeFile(output, JSON.stringify(objects, null, 2), err => {
      if (err) {
        console.error(err)
      }
    })
  })
}

function parseCountryFile(input, output, filter) {
  csv()
  .fromFile(input)
  .then((objects)=>{
    fs.writeFile(output, JSON.stringify(objects, null, 2), err => {
      if (err) {
        console.error(err)
      }
    })
  })
}

// canada, usa, and world in that order
parseCityFile('./src/data/cities/csv/canadaCities.csv', './src/data/cities/json/canadaCities.json', (obj) => parseInt(obj['ranking']) < 2);
parseCityFile('./src/data/cities/csv/usCities.csv', './src/data/cities/json/usCities.json', (obj) => parseInt(obj['ranking']) < 2);
parseCityFile('./src/data/cities/csv/worldCities.csv', './src/data/cities/json/worldCities.json', (obj) => obj['capital'] == 'primary' && obj['population']);

//countries
parseCountryFile('./src/data/countries/countries.csv', './src/data/countries/countries.json', (obj) => true);