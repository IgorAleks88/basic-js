const CustomError = require("../extensions/custom-error");
const winter=[0,1,11],
      spring=[2,3,4],
      summer=[5,6,7],
      fall=[8,9,10];


module.exports = function getSeason(date) {
  if (date==undefined) {
    return ('Unable to determine the time of year!');
  } else {
  if (Object.prototype.toString.call(date) !== "[object Date]"){
  throw new Error('Not date input');
 } else {
    if (winter.indexOf(date.getMonth())!=-1) {return 'winter' }
    if (spring.indexOf(date.getMonth())!=-1) {return 'spring' }
    if (summer.indexOf(date.getMonth())!=-1) {return 'summer' }
    if (fall.indexOf(date.getMonth())!=-1) {return 'fall' }
 }
}
};
