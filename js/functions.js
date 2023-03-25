//Проверка строки на длину:
const checkLength = function (newString, maxLength) {
  if (newString.length <= maxLength) {
    return true;
} else {
  return false
}
}
checkLength('ООООООООOOO',10);



//Проверка строки на палиндром:
const getPalindromInfo = function (str) {
  let newString = "";
  str = str.replace(/\s+/g, '');

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  if (str.toLowerCase() === newString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

getPalindromInfo('Лёша на полке клопа нашёл');


//Извлекаем числа из строки
function numFromStr(str){
  return [...str]
  .map(i => {if(isFinite(i) == true || i == "."){return i}else{return " "}})
  .join("")
  .split(" ")
  .filter(i => i != "")
  .map(i => Number(i))
}
numFromStr('Пришел 2023 год');


//Добавление символов
const myPadStart = function (string, minLength, pad) {
  let actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  };

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;

};
