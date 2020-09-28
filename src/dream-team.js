const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let dreamTeam = "";
    members.forEach((element) => {
      if (typeof element == "string") {
        element = element.replace(/\s+/g, "");
        dreamTeam = dreamTeam + element[0];
      }
    });

    return dreamTeam.toUpperCase().split("").sort().join("");
  } else {
    return false;
  }

  // remove line with error and write your code here
};
