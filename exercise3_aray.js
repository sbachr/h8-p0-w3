// mengakese nilai dalam aray
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];


function dataHandling(input) {
var data= '';

    for (i = 0; i < input.length ; i++ ) {

        data = data + 'Nomor ID : ' + input[i][0] + '\n' + 'Nama : ' + input[i][1] + '\n' + 'TTL : ' + input[i][2] + input[i][3] + '\n' + 'Hobby : ' + input[i][4] +'\n'+'\n';
        
        } return data;
}



console.log(dataHandling(input))

/* OutPut
Nomor ID : 0001
Nama : Roman Alamsyah
TTL : Bandar Lampung21/05/1989
Hobby : Membaca

Nomor ID : 0002
Nama : Dika Sembiring
TTL : Medan10/10/1992
Hobby : Bermain Gitar

Nomor ID : 0003
Nama : Winona
TTL : Ambon25/12/1965
Hobby : Memasak

Nomor ID : 0004
Nama : Bintang Senjaya
TTL : Martapura6/4/1970
Hobby : Berkebun

*/