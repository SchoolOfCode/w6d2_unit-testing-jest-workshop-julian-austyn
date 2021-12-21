import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from './index.js';

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson('Chris');
  const expected = 'Greetings, Chris';

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson('Liz K');
  const expected = 'Greetings, Liz K';

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = 'Please try again with a name!';

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = 'Please try again with a name!';

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

test(`When given a number, the doubleAndAddOne function returns the correct calculation.`, () => {
  const actual = doubleAndAddOne(3);
  const expected = 7;

  expect(actual).toBe(expected);
});

test(`When given an array, the isLongArray function returns true if the length is more than 10`, () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const expected = true;

  expect(actual).toEqual(expected);
});

test(`When given an array, the isLongArray function returns false if the length is less than 10`, () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6]);
  const expected = false;

  expect(actual).toEqual(expected);
});

test(`When given an array and a new item, the addItemToArray function should add the new item in the end of the array`, () => {
  const actual = addItemToArray(['dog', 'cat'], 'bird');
  const expected = ['dog', 'cat', 'bird'];

  expect(actual).toEqual(expected);
});

test(`When given an object, a key and a value, the addKeyValuePairToObject function should add the new key/value property in the end of the object`, () => {
  const obj = { species: 'dog', species: 'cat' };
  const actual = addKeyValuePairToObject(obj, 'species', 'bird');
  const expected = { ...obj, species: 'bird' };

  expect(actual).toEqual(expected);
});

test(`When given a number, the throwErrorIfEven function should return an error if number is even`, () => {
  const actual = throwErrorIfEven(4);
  const expected = 'Error, 4 is even!';

  expect(actual).toBe(expected);
});

test(`When given a number, the throwErrorIfEven function should return false if number not even`, () => {
  const actual = throwErrorIfEven(1);
  const expected = false;

  expect(actual).toBe(expected);
});
