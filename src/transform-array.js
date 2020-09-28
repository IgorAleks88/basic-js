const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("arr is not an array");
  } else {
    let newArr = new Array();
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          break;
        case "--discard-prev":
          newArr.pop();
          break;
        case "--double-next":
          newArr.push(arr[i + 1]);
          break;
        case "--double-prev":
          break;
        default:
          newArr.push(arr[i]);
      }
    }
  }
  // remove line with error and write your code here
};
