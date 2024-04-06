const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds = [];
numbers.forEach((num) => {
  if (num % 2 === 1) {
    odds.push(num);
  }
});
console.log(odds);
