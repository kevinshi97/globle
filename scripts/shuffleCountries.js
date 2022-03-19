const fs = require('fs');

let shuffle = function (array) {
  // Fisher-Yates Shuffle
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array
}

let shuffleCountries = function(input, output) {
  fs.readFile(input, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile(output, JSON.stringify(shuffle(JSON.parse(data)), null, 2), err => {
        if (err) {
          console.error(err)
        }
      })
    }
  })
}


shuffleCountries('./src/data/countries/countries.json', './src/data/countries/solutions.json');
