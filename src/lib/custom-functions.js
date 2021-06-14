// Функция roundingToDecimal() округляет до определеннго количества знаков после запятой.
// Она принимает 2 аргумента:
// первый - число, которое нужно округлить,
// второй - сколько знаков после запятой должно остаться
function roundingToDecimal(number, decimals) {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Функция randomColor() возвращает строку с рандомным цветом в формате 'rgb(000, 000, 000)'.
function randomColor() {
  const randomColor = [];
  for (let i = 0; i < 3; i++) {
    randomColor.push(Math.floor(Math.random() * (256 - 0) + 0));
  }
  return `rgb(${randomColor})`;
}

// Функция capitalLetter() возвращает строку с заглавное первой буквой.
// При этом все остальные буквы переводятся в нижний регистр, а также убираются пробелы по краям строки.
// Она принимает один аргумент - строку, которую нужно преобразовать.
function capitalLetter(string) {
  const tmpString = string.toLowerCase().trim();
  return tmpString[0].toUpperCase() + tmpString.slice(1, tmpString.length);
}

export { roundingToDecimal, randomColor, capitalLetter };
