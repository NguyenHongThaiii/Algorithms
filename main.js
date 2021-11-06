function statisticsWords(str) {
  const obj = {};
  const array = str
    .trim()
    .split(" ")
    .filter((x) => x !== "");

  array.forEach((x) => {
    obj[x] === undefined ? (obj[x] = 1) : (obj[x] += 1);
  });
  return obj;
}
// console.log(statisticsWords("ea ea    a   "));

function statisticsCharacters(str) {
  const obj = {};
  const array = str
    .trim()
    .split("")
    .filter((x) => {
      if (x === " ") x = "space";
      return x;
    });
  array.forEach((x) => {
    if (x === " ") x = "space";

    obj[x] === undefined ? (obj[x] = 1) : (obj[x] += 1);
  });
  return obj;
}
// console.log(statisticsCharacters("aa b cc"));

function isRight(str) {
  const first = str.slice(0, str.lastIndexOf("@"));
  const end = str.slice(str.lastIndexOf("@") + 1, str.lastIndexOf(".com"));
  if (first.length > 2 && end.length > 2) return true;
  return false;
}
// console.log(isRight("abc@seaar.com.vn"));

function countEmails(str) {
  const sign = ".com" || ".vn" || ".com.vn";
  const email = str
    .trim()
    .split(" ")
    .filter((x) => x.includes(sign));
  const newEmail = email.filter(isRight);
  return newEmail.length;
}
// console.log(
//   countEmails("my email is abc@s12321aar.com.vn abc@seaar.com.vn abc@se.com.vn")
// );

function isRight(str) {
  const end = str.slice(str.lastIndexOf("//") + 2, str.lastIndexOf(".com"));
  if (end.length > 2) return true;
  return false;
}
function countURLs(str) {
  if (str.length < 9) return 0;

  const protocol = "http" || "https" || "ws" || "wss";
  const domain = ".com" || ".vn" || ".com.vn";
  const email = str
    .trim()
    .split(" ")
    .filter((x) => x.includes(domain) && x.startsWith(protocol));
  const newEmail = email.filter(isRight);
  return newEmail.length;
}
// console.log(countURLs("my website is  http://ezfrontend.com https://th.com"));

function getDisplayedAddress(obj) {
  let str = "";
  for (const key in obj) {
    typeof obj[key] === "number"
      ? (str += `${obj[key]} `)
      : (str += `${obj[key]}, `);
  }
  return str;
}
const obj = {
  number: 123,
  street: "Nguyen Cong Tru",
  ward: "Ward 11",
  district: "Binh Thanh District",
  city: "HCMC",
};

// console.log(getDisplayedAddress(obj));

function fillPath(path, params) {
  // if (typeof params !== "object") return undefined;
  const array = path
    .trim()
    .split("/")
    .filter((x) => x !== "");
  array.forEach((x, i) => {
    Object.keys(params).forEach((key) => {
      if (`:${key}` === array[i]) array[i] = params[key];
    });
  });
  return array.join("/");
}

// console.log(fillPath("/products/:productId", { productId: 123 }));
console.log(
  fillPath("/categories/:categoryId/products/:productId", {
    categoryId: 1,
    productId: 2,
  })
);
