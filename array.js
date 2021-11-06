function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList)) return false;
  return numberList.some((x) => x % 2 === 0 && x > n);
}
// console.log(hasEvenNumberGreaterThanN([2, 3, 4, 4], 5));

function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList)) return false;

  return numberList.some((x) => x % 3 === 0);
}
// console.log(hasOddNumberDivisibleBy3([1, 11]));

function hasEasyFrontend(wordList) {
  let count = 0;
  return wordList.some((x) => {
    if (x.includes("easy frontend")) return true;
    if (x.includes("easy") || x.includes("frontend")) count++;
    if (count === 2) return true;
    return false;
  });
}
// console.log(hasEasyFrontend(["easy", ""]));

function hasTruthy(array) {
  if (!Array.isArray(array)) return false;
  return array.some((x) => x);
}
// console.log(hasTruthy([false, 123]));

function hasFalsy(array) {
  if (!Array.isArray(array)) return false;
  return array.some((x) => !x);
}
// console.log(hasFalsy([false]));

function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  return studentList.some((x) => {
    return x.id === studentId;
  });
}
// const studentList = [
//   { id: 1, name: "Easy" },
//   { id: 2, name: "Frontend" },
// ];
// console.log(hasStudent(studentList, 3));

function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  return studentList.some(
    (x) =>
      x.gender.toLowerCase() === "female".toLowerCase() &&
      x.name.toLowerCase() === "Alice".toLowerCase()
  );
}

// const studentList = [
//   { id: 1, name: "Alice", gender: "male" },
//   { id: 2, name: "aliCE", gender: "female" },
//   { id: 3, name: "Easy Frontend", gender: "male" },
// ];
// console.log(hasAlice(studentList));

function hasFreeShip(productList, price) {
  if (!Array.isArray(productList) || productList.length === 0) return false;

  return productList.some((x) => x.isFreeShip && x.price < price);
}

// const productList = [
//   { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
//   { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
// ];
// // console.log(hasFreeShip(productList, 10000000));

function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] <= numberList[index - 1]) return false;
  }
  return true;
}
// console.log(isIncreasingNumberList([1, 1])); // false
// console.log(isIncreasingNumberList([1, 2])); // true
// console.log(isIncreasingNumberList([2, 1])); // false

function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] >= numberList[index - 1]) return false;
  }
  return true;
}
// console.log(isIncreasingNumberList([1, 1])); // false
// console.log(isIncreasingNumberList([1, 2])); // true
// console.log(isIncreasingNumberList([2, 1])); // false

function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  if (numberList.length === 1) return true;
  let first = 0;
  let end = numberList.length - 1;
  console.log(end);
  while (first < end) {
    if (numberList[first] !== numberList[end]) return false;
    // console.log(first, end);
    first++;
    end--;
  }
  return true;
}

// console.log(isSymmetricList([1])); // true
// console.log(isSymmetricList([1, 2, 0, 2, 1])); // true
// console.log(isSymmetricList([1, 2, 3])); // false
// console.log(isSymmetricList([])); // false

function isFibonacci(n) {
  const array = [];
  let first = 0;
  let next = 1;
  let sum = 0;
  for (let index = 0; index < 100; index++) {
    if (sum < 100) array.push(sum);
    sum = first + next;
    first = next;
    next = sum;
  }
  if (array.includes(n)) return true;
  return false;
}
function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some(isFibonacci);
}
// console.log(hasFibonaciNumber([4, 6, 7]));

function findMinPositive(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  let min = Infinity;
  array.forEach((x) => {
    if (x > 0 && x < min) min = x;
  });
  if (min > 0) return min;
  return undefined;
}
// console.log(findMinPositive([-1, -5, 2]));

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return "";

  const res = wordList.filter((x) => {
    return x.trim().length <= 5;
  });
  return res[0];
}
// console.log(findLongestWord(["super", "cool"]));

function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return "";

  const res = numberList.filter((x) => x > 0 && x % 2 == 0);
  return res[0];
}
// console.log(findFirstPositiveEven([1, 5]));

function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return "";

  const res = numberList.filter((x) => x < 0 && x % 2 !== 0);
  return res[res.length - 1];
}
// console.log(findLastNegativeOdd([1, 3, 5]));
function findMaxIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return "";

  let max = numberList[0];
  let index = 0;
  const res = numberList.forEach((x, i) => {
    if (x > max) {
      max = x;
      index = i;
    }
  });
  return index;
}

function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;

  numberList.splice(findMaxIndex(numberList), 1);
  let max = numberList[0];
  numberList.forEach((x) => {
    if (max < x) max = x;
  });
  return max;
}
// console.log(findSecondLargestNumber([1]));

function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const res = numberList.filter((x) => {
    if (Math.sqrt(x) === Math.trunc(Math.sqrt(x))) return x;
  });
  return res[res.length - 1];
}
// console.log(findLastPerfectSquare([4, 16, 25, 36, 40]));

function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  const domain = ".com" || ".vn" || ".com.vn";
  const res = strList.filter((x) => {
    if (
      x.indexOf("@") !== x[x.length - 1] &&
      x.slice(x.indexOf(domain)) === domain &&
      x.slice(0, x.indexOf("@")).length > 2 &&
      x.slice(x.indexOf("@"), x.indexOf(domain)).length > 2
    )
      return x;
  });
  return res[0];
}
// console.log(findFirstEmail(["abc@easy.frontend", "abc@gmail.com"]));
// console.log(findFirstEmail(["abc@easy.frontend"]));
// console.log("abc@gmail.com".slice("abc@gmail.com".indexOf("com")));

function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;
  const protocol = "http" || "https" || "ws" || "wss";
  const domain = ".com" || ".vn" || ".com.vn";
  const res = strList.filter((x) => {
    if (
      x.slice(0, x.indexOf(":")) === protocol &&
      x.includes(domain) &&
      x.slice(x.indexOf("//") + 1, x.indexOf(domain)).length > 2
    )
      console.log(x.slice(0, x.indexOf(":") - 1));
    return x;
  });
  return res;
}
// console.log(findLastUrl(["https://google.com", "wss://chat.sample.com"]));

function findStudentById(numberList, studentId) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.findIndex((x) => x.id === studentId);
}

// const studentList = [
//   { id: 1, name: "Easy" },
//   { id: 2, name: "Frontend" },
// ];
// console.log(findStudentById(studentList, 2));

function findProductByCode(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;

  return productList.findIndex((x) => x.code === code);
}

// const productList = [
//   { id: 1, code: "ip01", name: "IPhone 16" },
//   { id: 2, code: "ip02", name: "IPhone 16 Promax" },
// ];
// console.log(findProductByCode(productList, "ip02"));

function findStudentHavingHighestMark(studentList) {
  let max = studentList[0].math;
  studentList.forEach((x) => {
    if (x.math > max) {
      max = x.math;
    }
  });
  return studentList[studentList.findIndex((x) => x.math === max)];
}
// const studentList = [
//   { id: 1, name: "Alice", math: 9 },
//   { id: 2, name: "Bob", math: 10 },
//   { id: 3, name: "John", math: 12 },
// ];
// console.log(findStudentHavingHighestMark(studentList));

function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;
  let min = (studentList[0].math + studentList[0].english) / 2;
  studentList.forEach((x) => {
    if ((x.math + x.english) / 2 < min) min = (x.math + x.english) / 2;
  });

  return studentList[
    studentList.findIndex((x) => (x.math + x.english) / 2 === min)
  ];
}
// const studentList = [
//   { id: 3, name: "John", math: 5, english: 5 },
//   { id: 1, name: "Alice", math: 9, english: 9 },
//   { id: 2, name: "Bob", math: 5, english: 5 },
// ];
// console.log(findLastStudentHavingMinAvg(studentList));

function findStudent(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;
  let count = 0;
  const newStudentList = [];
  studentList.forEach((x) => {
    Object.keys(x).forEach((key) => {
      if (key === "marks") newStudentList.push(x[key]);
    });
  });
  const res = newStudentList.filter((x) => {
    count = 0;
    Object.keys(x).forEach((key) => {
      if (x[key] < 5) count -= 1;
      else count += 1;
    });
    if (count === Object.keys(x).length - 2) return x;
  });
  return studentList[studentList.findIndex((x) => x.marks === res[0])];
}
// const studentList = [
//   { id: 3, name: "John", marks: { math: 4, english: 7, programming: 9 } },
//   { id: 4, name: "Sarah", marks: { math: 2, english: 8, programming: 10 } },
//   { id: 1, name: "Alice", marks: { math: 9, english: 9, programming: 5 } },
//   { id: 2, name: "Bob", marks: { math: 2, english: 3, programming: 5 } },
// ];
// console.log(findStudent(studentList));

function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return {};

  return productList[productList.findIndex((x) => x.isFreeShip)];
}
// const productList = [
//   { id: 1, name: "IPhone 5", isFreeShip: false },
//   { id: 2, name: "IPhone X", isFreeShip: true },
//   { id: 3, name: "IPhone 12 Pro", isFreeShip: false },
// ];
// console.log(findProductHavingFreeShip(productList));

function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return {};

  return productList[
    productList.findIndex((x) => x.name.toLowerCase().includes("iphone"))
  ];
}
// const productList = [
//   { id: 1, name: "Samsung" },
//   { id: 2, name: "IPHONE X" },
//   { id: 3, name: "iPhone 12 Pro" },
// ];
// console.log(findFirstIPhone(productList));

function generateNumberInRange(a, b) {
  if (a > b) return [];
  const newArray = [];
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }
  return newArray;
}

// console.log(generateNumberInRange(3, 5));

function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const newArray = [];
  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] > numberList[index - 1])
      newArray.push(numberList[index]);
  }
  return newArray;
}
// console.log(findNumbers([2, 5, 3, 7]));

function generateFibonaci(n) {
  let first = 0;
  let next = 1;
  let sum = 0;
  const newArray = [];
  newArray.push(first, next);
  while (first + next < n) {
    sum = first + next;
    first = next;
    next = sum;
    newArray.push(sum);
  }
  return newArray;
}
console.log(generateFibonaci(10));

function generatePrimeNumbers(n) {
  if (n < 0) return [];
  const newArray = [];
  let flag = true;
  for (let i = 0; i < n; i++) {
    for (let index = 2; index <= Math.sqrt(n); index++) {
      if (i % index == 0) flag = false;
    }
    if (flag) newArray.push(i);
    flag = true;
  }
  return newArray;
}
// console.log(generatePrimeNumbers(20));

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const numberEvenFirst = numberList[numberList.findIndex((x) => x % 2 === 0)];
  numberList.splice(
    numberList.findIndex((x) => x % 2 === 0),
    1
  );
  return numberList.filter((x) => x === numberEvenFirst);
}
// console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  return numberList.filter((x) => {
    if (x.toString()[0] % 2 !== 0) return x;
  });
}
// console.log(findAllNumbers([234, 421, 1]));

function findAllStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.filter((x) => x.math < 5);
}
// const studentList = [
//   { id: 1, name: "Alice", math: 9 },
//   { id: 2, name: "Bob", math: 4 },
//   { id: 3, name: "John", math: 0 },
// ];
// console.log(findAllStudents(studentList));

function findAllProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter((x) => x.isFreeShip);
}

// const productList = [
//   { id: 1, name: "iphone X", isFreeShip: true },
//   { id: 2, name: "iphone 16 Pro", isFreeShip: true },
//   { id: 3, name: "iphone 20 Pro", isFreeShip: false },
// ];
// console.log(findAllProducts(productList));

function findAllIphones(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];
  return productList.filter((x) => {
    if (x.name.toLowerCase().includes("iphone") && x.amount > 0) return x;
  });
}
const productList = [
  { id: 1, name: "Luxury IPhone X", amount: 1 },
  { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
  { id: 3, name: "iphone 20 Pro", amount: 2 },
];
// console.log(findAllIphones(productList));

function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.filter((x) => x > 0 && x % 2 === 0).length;
}
// console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 1]));

function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const newArray = [];
  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] < numberList[index - 1])
      newArray.push(numberList[index]);
  }
  return newArray.length;
}
// console.log(countNumbers([1, 2, 3, 10, 9, 8]));

function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;
  return wordList.filter((x) => x.length >= n).length;
}
// console.log(countWords(["easy", "frontend"], 4)); // 2
// console.log(countWords(["easy", "frontend"], 5)); // 1
// console.log(countWords(["easy", "frontend"], 10)); // 0

function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const newArray = [];
  numberList.forEach((x) => {
    if (!newArray.includes(x)) newArray.push(x);
  });
  return newArray.length;
}
// console.log(countUniqueNumbers([]));
// console.log(countUniqueNumbers([1, 1, 1]));
// console.log(countUniqueNumbers([1, 2, 3]));
// console.log(countUniqueNumbers([1, 2, 2, 3, 1]));

function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || a.length === 0 || !Array.isArray(b)) return 0;

  const newArray = [];
  a.forEach((x) => {
    if (!b.includes(x)) newArray.push(x);
  });

  return newArray.length;
}
// console.log(countNumbersNotInB([1, 2, 3], [4, 5]));
// console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3]));
// console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));

function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0 || avgMark < 0)
    return 0;
  const newArray = [];
  let sum = 0;
  studentList.filter((x) => {
    return Object.keys(x).forEach(
      (key) => key === "marks" && newArray.push(x[key])
    );
  });
  return newArray.filter((x) => {
    Object.keys(x).forEach(
      (key) => (sum = (sum + x[key]) / Object.keys(x).length)
    );
    if (sum >= avgMark) return x;
    sum = 0;
  }).length;
}
const studentList = [
  { id: 1, name: "Alice", marks: { math: 5, english: 6 } },
  { id: 2, name: "Bob", marks: { math: 9, english: 8 } },
];
// console.log(countStudents(studentList, 5));

function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;
  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] > numberList[index - 1]) sum += numberList[index];
  }
  return sum;
}
// console.log(sumEvenNumbers([2, 8, 5, 4]))0;

function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;
  // numberList.forEach((x) => {
  //   for (let index = 0; index < x.toString().length; index++) {
  //     sum += +x.toString()[index];
  //   }
  // });
  return numberList.reduce((acc, x) => {
    for (let i = 0; i < x.toString().length; i++) {
      acc += +x.toString()[i];
    }
    return acc;
  }, 0);
  // return sum;
}
// console.log(sumAllDigits([1234, 55]));

function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((acc, item) => {
    let min = +item.toString()[0];
    for (let index = 0; index < item.toString().length; index++) {
      if (min > +item.toString()[index]) min = +item.toString()[index];
    }
    return acc + min;
  }, 0);
}
// console.log(sumAllMinDigits([302, 532]));

function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  return cartItemList.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
}

// const cartItemList = [
//   { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
//   { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
// ];
// console.log(calcCartTotal(cartItemList));

// function insert(arr, newItem, k) {
//   if (!Array.isArray(arr)) return [];
//   if (k > arr.length) arr.push(newItem);
//   else if (k <= 0) arr.unshift(newItem);
//   else arr.splice(k, 0, newItem);
//   return arr;
// }
// console.log(insert([1, 2, 3], 0, -1));

function remove(arr, k, n) {
  if (!Array.isArray(arr)) return [];
  if (n === undefined) arr.splice(0);
  if (k < 0 || k >= arr.length) return arr;
  else arr.splice(k);
  return arr;
}
// console.log(remove([1, 2, 3], -1, 10));
// console.log(remove([1, 2, 3], 3, 10));
// console.log(remove([1, 2, 3], 1, 2));
// console.log(remove([1, 2, 3], 0));
function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];
  return studentList.filter((student) => student.id !== studentId);
}

// const studentLists = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// console.log(removeStudentById(studentLists, 1));
// console.log(removeStudentById(studentLists, 3));

function insert(numberList, newNumber) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  numberList.push(newNumber);
  return numberList.sort((a, b) => a - b);
}
// console.log(insert([4124, 123, 1100], 1032));

function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const newArray = [];
  numberList.forEach((x) => !newArray.includes(x) && newArray.push(x));
  return newArray;
}
// console.log(uniqueArray([1, 1, 2, 3, 2]));

function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const newArray = [];
  numberList.forEach((x) => {
    if (!newArray.includes(x)) newArray.push(x);
    else newArray.splice(newArray.indexOf(x), 1);
  });
  return newArray;
}
// console.log(removeDuplicatedNumbers([1, 1, 2, 3, 2]));

function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];
  let newArray = [];
  const newResult = [];
  for (let index = 0; index < numberList.length; index++) {
    if (newArray.length > 0 && numberList[index] >= numberList[index + 1]) {
      newArray.push(numberList[index]);
      newResult.push(newArray);
      newArray = [];
    } else if (index === numberList.length - 1 && newArray.length > 1) {
      if (numberList[index] > numberList[index - 1])
        newArray.push(numberList[index]);
      newResult.push(newArray);
    } else {
      newArray.push(numberList[index]);
    }
  }
  // return newResult;
  return newResult.filter((x) => x.length > 2);
}
// console.log(findAllIncreasingSubArr([1, 2, 4, 2, 3, 5, 10, 20]));

function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];
  let newArray = [];
  const newResult = [];
  for (let index = 0; index < numberList.length; index++) {
    if (newArray.length > 0 && numberList[index] < numberList[index + 1]) {
      newArray.push(numberList[index]);
      newResult.push(newArray);
      newArray = [];
    } else if (index === numberList.length - 1 && newArray.length > 1) {
      if (numberList[index] > numberList[index - 1])
        newArray.push(numberList[index]);
      newResult.push(newArray);
    } else {
      newArray.push(numberList[index]);
    }
  }
  return newResult.filter((x) => x.length > 2);
}
// console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20]));

function isSubArray(a, b) {
  if (a.length === 0) return true;
  if (a.length > b.length) return false;
  const searchTerm = a.join(",");
  const sentence = b.join(",");
  return sentence.includes(searchTerm);
}
// console.log(isSubArray([1, 2], [4, 10, 1, 3, 2]));
function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const newArray = findAllIncreasingSubArr(numberList).flat();
  const set = new Set(newArray);
  const newResult = [...set];
  return newResult.filter((x) => x % 2 === 0);
}
// console.log(findAllPositiveEvenSubArr([1, 2, 4, 2, 3, 5, 10, 20]));

function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const newArray = findAllIncreasingSubArr(numberList);
  let sum = -Infinity;
  newArray.forEach((x) => {
    let temporary = 0;
    x.forEach((item) => {
      temporary += item;
    });
    if (temporary > sum) sum = temporary;
  });
  return sum;
}
// console.log(findMaxSumArray([1, 2, 3]));

function findMaxSumArray2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const sum = findMaxSumArray(numberList);
  let newSum = 0;
  const newNumbers = findAllIncreasingSubArr(numberList);
  let res = [];
  newNumbers.forEach((item) => {
    item.forEach((x) => (newSum += x));
    if (newSum === sum) res = item;
    else newSum = 0;
  });
  return res;
}
// console.log(findMaxSumArray2([1, 2, 3, 0, 2, 4]));
function findSumPair(numberList, targetSum) {
  const newArray = [];
  for (let index = 0; index < numberList.length; index++) {
    if (numberList.includes(targetSum - numberList[index])) {
      newArray.push(
        numberList[index],
        numberList[numberList.indexOf(targetSum - numberList[index])]
      );
      break;
    }
  }
  return newArray.sort((a, b) => a - b);
}
// console.log(findSumPair([3, 2, 1], 5));

function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  const newArray = [];
  for (let i = 5; i <= n; i++) {
    newArray.push(i);
  }
  for (let i = 0; i < newArray.length; i++) {
    if (numberList[i] !== newArray[i]) return newArray[i];
  }
  return -1;
}
// console.log(findMissingNumber([5], 6));

function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return {};

  const obj = {};
  numberList.forEach((x) => {
    if (obj[x] !== undefined) obj[x] += 1;
    else obj[x] = 1;
  });

  return obj;
}
// console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const obj = statisticsNumbers(numberList);
  let max = -Infinity;
  Object.keys(numberList).forEach((x) => {
    if (obj[x] > max) max = obj[x];
  });
  return max;
}
// console.log(findMostFrequentNumber([3, 2, 3, 2, 3, 4]));
