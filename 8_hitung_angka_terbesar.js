// // Logic Challenge - Pasangan Angka Terbesar
// // Problem
// // Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

// // Code
// function pasanganTerbesar(num) {
//   num = num.toString()
//   let result = []
//   
//   for(let a=0; a<num.length; a++) {
//       let temp = num[a] + (num[a+1] ? num[a+1]:'')
//       result.push(temp)
//   } 
//   return Math.max(...result)
// }


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// solution 2
function pasanganTerbesar(num) {
  num = num.toString()
  let result = 1

  for(let a=0; a<num.length; a++) {
      let temp = num[a] + (num[a+1] ? num[a+1]:'')
      if(temp > result) result = temp
  } 
  return result
}