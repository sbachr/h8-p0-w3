function balikString(nama) {
  var panjangIndex = nama.length-1;
  var kalimat = '';
      for (i = panjangIndex ; i >= 0; i--){
        kalimat = kalimat + nama[i];
      } 
   return kalimat;
  }
  
  
  console.log(balikString('Hello World!'));