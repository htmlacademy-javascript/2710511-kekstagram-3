function getRandomInteger (a, b) {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}

function getId (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function getRandomElements (array, count) {
  const result = [];

  while (result.length < count) {
    const element = array[getRandomInteger(0, array.length - 1)];

    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

export { getRandomInteger, getId, getRandomElements };
