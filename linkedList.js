// function getUniqueWords(sentence) {
//   // your code here ...
//   if (sentence.length === 0) return [];
//   const newArray = sentence.split(" ").filter((x) => x !== "");
//   const newString = new Set(newArray);
//   return [...newString];
// }
// // console.log(getUniqueWords("front end is     easy easy"));

// function buildCategoryMapV2(categoryList) {
//   // your code here
//   const newMap = new Map();
//   if (!Array.isArray(categoryList) || categoryList.length === 0) return newMap;
//   categoryList.forEach((key) => {
//     newMap[Number(key.id)] = key;
//   });

//   return newMap[1];
// }
// const categoryList = [
//   { id: 1, name: "phone" },
//   { id: 2, name: "email" },
// ];

// // console.log(buildCategoryMapV2(categoryList));

// const PIN_LENGTH = 6;
// function isValidPIN(pin) {
//   let flag = true;
//   function checkRaise(pin) {
//     const newString = pin.toString();
//     for (let index = 1; index < newString.length; index++) {
//       if (newString[index - 1] > newString[index]) return false;
//     }
//     return true;
//   }
//   function checkDecrease(pin) {
//     const newString = pin.toString();
//     for (let index = 1; index < newString.length; index++) {
//       if (newString[index - 1] < newString[index]) return false;
//     }
//     return true;
//   }
//   // your code here ...
//   const stringPin = pin.toString();
//   if (stringPin.length > PIN_LENGTH || stringPin.length < PIN_LENGTH)
//     return false;
//   const newSet = new Set([...stringPin]);
//   if (newSet.size < PIN_LENGTH || checkRaise(pin) || checkDecrease(pin))
//     return false;

//   newSet.forEach((value) => {
//     if (!!!Number(value)) flag = false;
//   });
//   return flag;
// }
// console.log(isValidPIN("111111"));

for (var i = 0; i < 3; i++) {
  callSetCallback(i);
}

function callSetCallback(i) {
  setTimeout(() => console.log(i), 0);
  console.log("object", i);
}

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
console.log(`i`, i);
