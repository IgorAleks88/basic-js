const CustomError = require("../extensions/custom-error");

const cryptKeys=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class VigenereCipheringMachine {

  constructor(direction){
    if (direction!=undefined) {
    this.direct = direction;
    } else {
      this.direct=true;
    }
  }
  
  encrypt(message, key) {
    if (message==undefined || key==undefined){
    throw new Error('Message or key is not defined');
    } else {
      key=key.toLowerCase();
      let encryptedMessage="";
      let j=0;
      for (let i=0;i<message.length;i++){
          if (cryptKeys.indexOf(message[i].toLowerCase())!=-1){
            let delta=key.charCodeAt(j)-97;
            let newCharCode=message.toLowerCase().charCodeAt(i)+delta;
            if (newCharCode>122) {
              newCharCode-=26;
            }
            encryptedMessage+=String.fromCharCode(newCharCode);
            j++;
            if (j>key.length-1){
              j=0;
            }
          } else {
            encryptedMessage+=message[i];
          }
      } if (this.direct==false) {
        return encryptedMessage.split("").reverse().join("").toUpperCase();
      } else {
    return encryptedMessage.toUpperCase();}
    }
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage==undefined || key==undefined){
      throw new Error('Message or key is not defined');
      } else {
        key=key.toLowerCase();
        let message="";
        let j=0;
        for (let i=0;i<encryptedMessage.length;i++){
          if (cryptKeys.indexOf(encryptedMessage[i].toLowerCase())!=-1){
            let delta=key.charCodeAt(j)-97;
            let newCharCode=encryptedMessage.toLowerCase().charCodeAt(i)-delta;
            if (newCharCode<97) {
              newCharCode+=26;
            }
            message+=String.fromCharCode(newCharCode);
            j++;
            if (j>key.length-1){
              j=0;
            }
          } else {
            message+=encryptedMessage[i];
          }
      }
      if (this.direct==false) {
        return message.split("").reverse().join("").toUpperCase();
      } else {
    return message.toUpperCase();
      }
      }
  }
}

module.exports = VigenereCipheringMachine;
