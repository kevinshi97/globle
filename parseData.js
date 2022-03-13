const fs = require('fs');
const csv=require('csvtojson');

function parseFile(input, output, filter) {
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

// canada, usa, and world in that order
parseFile('./src/data/canada/canadaCities.csv', './src/data/canada/canadaCities.json', (obj) => parseInt(obj['ranking']) < 2);
parseFile('./src/data/us/usCities.csv', './src/data/us/usCities.json', (obj) => parseInt(obj['ranking']) < 2);
parseFile('./src/data/world/worldCities.csv', './src/data/world/worldCities.json', (obj) => obj['capital'] == 'primary' && obj['population']);