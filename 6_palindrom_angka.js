// Logic Challenge - Number Palindrome
// Problem
// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

// Solusi 1
// function angkaPalindrome(num) {
//   num++
//   var rev = (num).toString().split('').reverse().join('')
//     if(num == rev){
//         return num
//     }   
//         return angkaPalindrome(num)
// }

// Solusi 2
function angkaPalindrome(num) {
    num ++
 var rev = ''
 num = num.toString()
 for(let a=0; a<num.length; a++){
     rev = num[a] + rev
     if(num == rev){
         return num
     }
 }
    return angkaPalindrome(num)
}

// function angkaPalindrome(num){
//     if (num >= 0 && num < 9){
//         return num+1
//     }else {
//         var isPalind = true;
//         while (isPalind === true){
//             num += 1
//             var numstring = String(num)
//             var temp=''
            
//             for (var i = numstring.length-1 ; i >= 0 ; i--){
//                 temp+=numstring[i]
//             }

//             if (temp === String(num)){
//                 return num
//             }
//         }
//     }
// }

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
