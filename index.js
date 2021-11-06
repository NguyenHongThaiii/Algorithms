// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE

// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
  // your code here
  if (amount % BASE_UNIT !== 0 || amount < BASE_UNIT) return "Invalid balance";
  if (amount > 8000000) return "Insuffcient balance from ATM";
  const obj = {};
  while (amount > 0) {
    if (amount >= K500_VALUE || !obj.k500) {
      obj.k500 =
        Math.trunc(amount / K500_VALUE) >= 2
          ? 2
          : Math.trunc(amount / K500_VALUE);
      amount = amount - obj.k500 * K500_VALUE;
    }
    if (amount >= K200_VALUE || !obj.k200) {
      obj.k200 =
        Math.trunc(amount / K200_VALUE) >= 5
          ? 5
          : Math.trunc(amount / K200_VALUE);
      amount = amount - obj.k200 * K200_VALUE;
    }
    if (amount >= K100_VALUE || !obj.k100) {
      obj.k100 =
        Math.trunc(amount / K100_VALUE) >= 10
          ? 10
          : Math.trunc(amount / K100_VALUE);
      amount = amount - obj.k100 * K100_VALUE;
    }
    if (amount >= K50_VALUE || !obj.k50) {
      obj.k50 =
        Math.trunc(amount / K50_VALUE) >= 100
          ? 100
          : Math.trunc(amount / K50_VALUE);
      amount = amount - obj.k50 * K50_VALUE;
    }
  }
  return obj;
}
// console.log(withdraw(8000000));

function childrenArray(array, step) {
  const newArray = [];
  let childrenArray = [];
  let count = 0;

  for (let index = 0; index < array.length; index++, count++) {
    if (count === step) {
      newArray.push(childrenArray);
      childrenArray = [];
      count = 0;
    }
    if (index === array.length - 1) {
      // newArray.push([array[index]]);
      newArray.push(childrenArray);
    }
    childrenArray.push(array[index]);
  }
  return newArray;
}

// console.log(childrenArray([1, 2, 3, 4, 5, 7, 8], 2));

function arrayFibonacci(array) {
  const newArray = [];

  let first = array[0];
  for (let index = 1; index < array.length; index++) {
    if (index !== 0 && first + array[index] === array[index + 1]) {
      newArray.push(array[index + 1]);
    }
    if (index === array.length - 1) return newArray;
    first = array[index];
  }
}
console.log(arrayFibonacci([1, 2, 3, 4, 7, 5]));
