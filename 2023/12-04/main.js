const fs = require('fs');

let sum1 = 0;

fs.readFile('example.txt', 'utf-8', (error, data) => {
  data = data.split('\n');

  data.forEach((card) => {
    let cardID = Number(card.split(': ')[0].split(' ')[1]);
    card = card.split(': ');
    let choice = card[1].replace(/\s+/g, ' ').trim().split(' | ');
    let option1 = choice[0].split(' ');
    let option2 = choice[1].split(' ');

    let temp = 0;
    option1
      .filter((value) => option2.includes(value))
      .forEach((point, i) => {
        if (i === 0) {
          temp += 1;
        } else {
          temp *= 2;
        }
      });
    sum1 += temp;
    temp = 0;
  });

  console.log(`How many points are they worth in total? ${sum1}`);
});
