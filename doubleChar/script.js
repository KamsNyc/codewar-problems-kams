function doubleChar(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    
    newStr += str[i] + str[i];
  }
  return newStr;
}

let result = doubleChar('24242');
let result2 = doubleChar('@!$^#2$');
let result3 = doubleChar('K');
let result4 = doubleChar('hello');
let result5 = doubleChar('21321321');
let result6 = doubleChar('absbwa');
console.log(result, result2, result3, result4,result5, result6);
