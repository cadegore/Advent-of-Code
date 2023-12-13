const fs = require('fs');

let seedsData = {};
let lowestLocation = -1;

fs.readFile('input.txt', 'utf-8', (err, data) => {
  data = data.split('\n\n');
  const seeds = data[0].split(': ')[1].split(' ');
  seeds.forEach((seed) => {
    seedsData[seed] = {
      soil: -1,
      fertilizer: -1,
      water: -1,
      light: -1,
      temperature: -1,
      humidity: -1,
      location: -1,
    };
  });

  data[1]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((seed) => {
      let seedToSoil = seed.split(' ');
      let lowerSide = Number(seedToSoil[1]);
      let higherSide = Number(seedToSoil[1]) + Number(seedToSoil[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (lowerSide <= Number(seeds[i]) && Number(seeds[i]) <= higherSide) {
          seedsData[seeds[i]]['soil'] =
            Number(seeds[i]) + (Number(seedToSoil[0]) - Number(seedToSoil[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['soil'] === -1) {
      seedsData[seeds[i]]['soil'] = Number(seeds[i]);
    }
  }

  data[2]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((soil) => {
      let soilToFertilizer = soil.split(' ');
      let lowerSide = Number(soilToFertilizer[1]);
      let higherSide = Number(soilToFertilizer[1]) + Number(soilToFertilizer[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (
          lowerSide <= Number(seedsData[seeds[i]]['soil']) &&
          Number(seedsData[seeds[i]]['soil']) <= higherSide
        ) {
          seedsData[seeds[i]]['fertilizer'] =
            Number(seedsData[seeds[i]]['soil']) +
            (Number(soilToFertilizer[0]) - Number(soilToFertilizer[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['fertilizer'] === -1) {
      seedsData[seeds[i]]['fertilizer'] = Number(seedsData[seeds[i]]['soil']);
    }
  }

  data[3]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((fertilizer) => {
      let fertilizerToWater = fertilizer.split(' ');
      let lowerSide = Number(fertilizerToWater[1]);
      let higherSide = Number(fertilizerToWater[1]) + Number(fertilizerToWater[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (
          lowerSide <= Number(seedsData[seeds[i]]['fertilizer']) &&
          Number(seedsData[seeds[i]]['fertilizer']) <= higherSide
        ) {
          seedsData[seeds[i]]['water'] =
            Number(seedsData[seeds[i]]['fertilizer']) +
            (Number(fertilizerToWater[0]) - Number(fertilizerToWater[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['water'] === -1) {
      seedsData[seeds[i]]['water'] = Number(seedsData[seeds[i]]['fertilizer']);
    }
  }

  data[4]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((water) => {
      let waterToLight = water.split(' ');
      let lowerSide = Number(waterToLight[1]);
      let higherSide = Number(waterToLight[1]) + Number(waterToLight[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (
          lowerSide <= Number(seedsData[seeds[i]]['water']) &&
          Number(seedsData[seeds[i]]['water']) <= higherSide
        ) {
          seedsData[seeds[i]]['light'] =
            Number(seedsData[seeds[i]]['water']) +
            (Number(waterToLight[0]) - Number(waterToLight[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['light'] === -1) {
      seedsData[seeds[i]]['light'] = Number(seedsData[seeds[i]]['water']);
    }
  }

  data[5]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((light) => {
      let lightToTemperature = light.split(' ');
      let lowerSide = Number(lightToTemperature[1]);
      let higherSide = Number(lightToTemperature[1]) + Number(lightToTemperature[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (
          lowerSide <= Number(seedsData[seeds[i]]['light']) &&
          Number(seedsData[seeds[i]]['light']) <= higherSide
        ) {
          seedsData[seeds[i]]['temperature'] =
            Number(seedsData[seeds[i]]['light']) +
            (Number(lightToTemperature[0]) - Number(lightToTemperature[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['temperature'] === -1) {
      seedsData[seeds[i]]['temperature'] = Number(seedsData[seeds[i]]['light']);
    }
  }

  data[6]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((temperature) => {
      let temperatureToHumidity = temperature.split(' ');
      let lowerSide = Number(temperatureToHumidity[1]);
      let higherSide = Number(temperatureToHumidity[1]) + Number(temperatureToHumidity[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (
          lowerSide <= Number(seedsData[seeds[i]]['temperature']) &&
          Number(seedsData[seeds[i]]['temperature']) <= higherSide
        ) {
          seedsData[seeds[i]]['humidity'] =
            Number(seedsData[seeds[i]]['temperature']) +
            (Number(temperatureToHumidity[0]) - Number(temperatureToHumidity[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['humidity'] === -1) {
      seedsData[seeds[i]]['humidity'] = Number(seedsData[seeds[i]]['temperature']);
    }
  }

  data[7]
    .split('\n')
    .filter((s) => !s.includes(':'))
    .forEach((humidity) => {
      let humidityToLocation = humidity.split(' ');
      let lowerSide = Number(humidityToLocation[1]);
      let higherSide = Number(humidityToLocation[1]) + Number(humidityToLocation[2]) - 1;

      for (let i = 0; i < seeds.length; i++) {
        if (
          lowerSide <= Number(seedsData[seeds[i]]['humidity']) &&
          Number(seedsData[seeds[i]]['humidity']) <= higherSide
        ) {
          seedsData[seeds[i]]['location'] =
            Number(seedsData[seeds[i]]['humidity']) +
            (Number(humidityToLocation[0]) - Number(humidityToLocation[1]));
        }
      }
    });

  for (let i = 0; i < seeds.length; i++) {
    if (seedsData[seeds[i]]['location'] === -1) {
      seedsData[seeds[i]]['location'] = Number(seedsData[seeds[i]]['humidity']);
    }
  }

  lowestLocation = Number(seedsData[seeds[0]]['location']);
  for (let i = 0; i < seeds.length; i++) {
    if (lowestLocation > Number(seedsData[seeds[i]]['location'])) {
      lowestLocation = Number(seedsData[seeds[i]]['location']);
    }
  }

  console.log(`What is the lowest location number that corresponds to any of the initial seed numbers? ${lowestLocation}
`);
});
