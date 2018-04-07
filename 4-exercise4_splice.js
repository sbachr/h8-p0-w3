var str = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 

var dataHandling = function(str) {        
str.splice(1,2,str[1]+' Elsharawy', 'Provinsi '+ str[2], 'Pria', 'SMA International Metro' )


var penanggalan = str[5].split('/')
var nama = str[1].slice(0,15)
var bulan = '';

switch (Number(penanggalan[1])) {
  
    case 01  :  bulan = 'Januari'; break;
    case 02  :  bulan = 'Februari'; break;
    case 03  :  bulan = 'Maret'; break;
    case 04  :  bulan = 'April'; break;
    case 05  :  bulan = 'Mei'; break; 
    case 06  :  bulan = 'Juni'; break;
    case 07  :  bulan = 'Juli'; break;
    case 08  :  bulan = 'Agustus'; break;
    case 09  :  bulan = 'September'; break;
    case 10 :  bulan = 'Oktober'; break;
    case 11 :  bulan = 'November'; break;
    case 12 :  bulan = 'Desember'; break;
    default : 'Data yang anda input tidak Valid'; break;
   
  } 
  
penanggalanSort = penanggalan.sort(function(angka1,angka2){return Number(angka1) < Number(angka2)}).join('-')

  console.log(str)
  console.log(bulan)
  console.log(penanggalan)
  console.log(penanggalanSort)
  console.log(nama)
}

dataHandling(str);