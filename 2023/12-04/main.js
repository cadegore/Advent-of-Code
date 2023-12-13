const fs = require('fs');

let sum1 = 0;
let sum2 = 0;
let totalCards = {};

fs.readFile('input.txt', 'utf-8', (error, data) => {
  data = data.split('\n');
  for (let i = 0; i < data.length; i++) {
    totalCards[i + 1] = 1;
  }
  data.forEach((card) => {
    let cardID = Number(card.replace(/\s+/g, ' ').trim().split(': ')[0].split(' ')[1]);
    card = card.split(': ');
    let choice = card[1].replace(/\s+/g, ' ').trim().split(' | ');
    let option1 = choice[0].split(' ');
    let option2 = choice[1].split(' ');
    let temp = 0;
    let matched = option1.filter((value) => option2.includes(value));
    matched.forEach((point, i) => {
      if (i === 0) {
        temp += 1;
      } else {
        temp *= 2;
      }
    });
    sum1 += temp;
    temp = 0;
    for (let i = 0; i < matched.length; i++) {
      for (let j = 0; j < totalCards[cardID]; j++) {
        totalCards[cardID + i + 1] += 1;
      }
    }
  });

  console.log(`How many points are they worth in total? ${sum1}`);
  Object.values(totalCards).forEach((s) => (sum2 += s));
  console.log(`How many total scratchcards do you end up with? ${sum2}`);
});
