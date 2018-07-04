
// function palindrome(kata) {
//     var result = ''
//     for(let a=0; a<kata.length; a++){
//         result = kata[a] + result
//     }
//     return result === kata
//   }

//Solusi 2
function palindrome(str) {
    if(str.length == 1) return true;

    if(str[0] == str[str.length-1]) {
        return palindrome(str.slice(1,str.length-1));
    }
        return false
}

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
