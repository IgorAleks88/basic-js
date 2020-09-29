const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = "";
  let sepStr = "";
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator == undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  }
  if (options.addition !== undefined) {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      sepStr = sepStr + options.addition + options.additionSeparator;
    }
    sepStr = sepStr.slice(0, sepStr.length - options.additionSeparator.length);
  }
  for (let j = 1; j <= options.repeatTimes; j++) {
    newStr = newStr + str + sepStr + options.separator;
  }
  newStr = newStr.slice(0, newStr.length - options.separator.length);
  return newStr;
  // remove line with error and write your code here
};
