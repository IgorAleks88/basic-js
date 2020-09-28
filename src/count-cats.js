const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach((row) => {
    row.forEach((element) => {
      if (element == "^^") {
        cats++;
      }
    });
  });
  // remove line with error and write your code here
  return cats;
};
