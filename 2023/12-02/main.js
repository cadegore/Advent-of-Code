const fs = require('fs');

let notAllowedGame = [];
let gamePower = {};
let gameIDTotal1 = 0;
let gameIDTotal2 = 0;
const redMax = 12;
const greenMax = 13;
const blueMax = 14;

fs.readFile('input.txt', 'utf-8', (error, data) => {
  data = data.split('\n');

  data.forEach((game) => {
    game = game.split(': ');
    let gameID = Number(game[0].split(' ')[1]);
    let gamePick = game[1].split('; ');
    let currentRed = 0;
    let currentBlue = 0;
    let currentGreen = 0;
    gamePick.forEach((item) => {
      item = item.split(', ');
      item.forEach((choice) => {
        choice = choice.split(' ');
        if (
          (choice[1] === 'red' && Number(choice[0]) > redMax) ||
          (choice[1] === 'green' && Number(choice[0] > greenMax)) ||
          (choice[1] === 'blue' && Number(choice[0] > blueMax))
        ) {
          notAllowedGame.push(game.join(': '));
        }

        if (choice[1] === 'red' && Number(choice[0]) > currentRed) {
          currentRed = Number(choice[0]);
        } else if (choice[1] === 'blue' && Number(choice[0]) > currentBlue) {
          currentBlue = Number(choice[0]);
        } else if (choice[1] === 'green' && Number(choice[0]) > currentGreen) {
          currentGreen = Number(choice[0]);
        }
      });
    });

    gamePower[gameID] = currentBlue * currentRed * currentGreen;
  });

  let possibleGames = data.filter((game) => !notAllowedGame.includes(game));
  possibleGames.forEach((g) => {
    gameIDTotal1 += Number(g.split(': ')[0].split(' ')[1]);
  });
  console.log(`sum of the IDs of those game: ${gameIDTotal1}`);
  Object.values(gamePower).forEach((v) => (gameIDTotal2 += v));
  console.log(`sum of the power of these sets: ${gameIDTotal2}`);
});
