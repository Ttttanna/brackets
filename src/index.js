module.exports = function check(str, bracketsConfig) {
  let arr = [];
  
  for (let item of bracketsConfig) {
    arr.push(item.join(""));
  }

  for (let i = 0; i< arr.length;) {
    if (str.includes(arr[i])) {
      str = str.replace(arr[i], "");
      i = 0;
    }
    else i++;
  }

  if (str.length > 0) {
    return false;
  } else return true;


  

}
