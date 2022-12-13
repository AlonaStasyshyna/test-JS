const obj = {
  viktor: ["apple", "grape", "orange", "apple", "banana"],
  kate: ["grape", "orange", "apple", "grape", "banana"],
};

function calc(obj) {
  const obj1 = {};

  for (const key in obj) {
    const arr = obj[key];
    const newObj = {};

    for (const fruit of arr) {
      if (newObj.hasOwnProperty(fruit)) {
        newObj[fruit] += 1;
      } else {
        newObj[fruit] = 1;
      }
    }

    obj1[key] = { ...newObj };
  }

  return obj1;
}

console.log(calc(obj));

// запрещено обращаться на прямую к obj.viktor или object.kate
// return ...

//result of calc method should be equal to
// {
//     viktor: {
//         apple: 2,
//         grape: 1,
//         orange: 1,
//         banana: 1,
//     },
//     kate: {
//         apple: 1,
//         grape: 2,
//         orange: 1,
//         banana: 1,
//     },
// }

