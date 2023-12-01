const fs = require('fs');
let sum1 = 0;
let sum2 = 0;

fs.readFile('input.txt', 'utf-8', (error, string) => {
  string = string.split('\n');
  string.forEach((s) => {
    s = Number(s.replaceAll(/[^0-9]+/g, ''));
    if (s.toString().length == 1) {
      s = s * 10 + s;
    } else if (s.toString.length != 2) {
      s = Number(s.toString().split('').at(0) + s.toString().split('').at(-1));
    }
    sum1 += s;
  });
  console.log(`sum1 = ${sum1}`);

  string.forEach((s) => {
    string = s.split('\n');
    s = Number(
      s
        .replaceAll('one', 'o1e')
        .replaceAll('two', 't2o')
        .replaceAll('three', 't3e')
        .replaceAll('four', 'f4r')
        .replaceAll('five', 'f5e')
        .replaceAll('six', 's6x')
        .replaceAll('seven', 's7n')
        .replaceAll('eight', 'e8t')
        .replaceAll('nine', 'n9e')
        .replaceAll(/[^0-9]+/g, '')
    );

    if (s.toString().length == 1) {
      s = s * 10 + s;
    } else if (s.toString.length != 2) {
      s = Number(s.toString().split('').at(0) + s.toString().split('').at(-1));
    }

    sum2 += s;
  });
  console.log(`sum2 = ${sum2}`);
});
