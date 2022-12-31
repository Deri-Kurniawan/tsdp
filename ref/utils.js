const factorial = (n) => {
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
};
const intToPercentage = (int) => {
  return int * 100;
};
const hoursToMinutes = (hour) => {
  return hour * 60;
};
export { factorial, intToPercentage, hoursToMinutes };
