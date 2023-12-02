const fs = require('fs');

let notAllowedGame = [];
let gameIDTotal = 0;
const red = 12;
const green = 13;
const blue = 14;

fs.readFile('example.txt', 'utf-8', (error, data) => {
  data = data.split('\n');

  data.forEach((game) => {
    game = game.split(': ');
    let gamePick = game[1].split('; ');
    gamePick.forEach((item) => {
      item = item.split(', ');
      item.forEach((choice) => {
        choice = choice.split(' ');
        if (
          (choice[1] === 'red' && Number(choice[0]) > red) ||
          (choice[1] === 'green' && Number(choice[0] > green)) ||
          (choice[1] === 'blue' && Number(choice[0] > blue))
        ) {
          notAllowedGame.push(game.join(': '));
        }
      });
    });
  });

  let possibleGames = data.filter((game) => !notAllowedGame.includes(game));
  possibleGames.forEach((g) => {
    gameIDTotal += Number(g.split(': ')[0].split(' ')[1]);
  });
  console.log(`sum of the IDs of those game: ${gameIDTotal}`);
});
