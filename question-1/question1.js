//Roessell Dilan Piyasenage Don 
//101278656

lowerCaseWords = (array) => {
  let promise = new Promise((res, rej) => {
    if (!array || array.length === 0 || !Array.isArray(array)) rej("Invalid input");

    res(array.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

  return promise
}
  
let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray).then((res) => console.log(res))
.catch((err) => console.log(err));
