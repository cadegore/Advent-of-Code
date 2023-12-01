const fs = require('fs');
let sum = 0;

fs.readFile('input.txt', 'utf-8', (error, string) => {
  string = string.split('\n');
  string.forEach((s) => {
    s = Number(s.replace(/[^0-9]+/g, ''));
    // console.log(s);

    if (s.toString().length == 1) {
      s = s * 10 + s;
    } else if (s.toString.length != 2) {
      s = Number(s.toString().split('').at(0) + s.toString().split('').at(-1));
    }
    sum += s;
  });
  console.log(sum);
});
