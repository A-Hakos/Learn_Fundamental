// Function adalah blok kode program yang akan berjalan saat kita panggil

// membuat function 
function sayHello(){
    console.log("hello");
}
// memanggil function
sayHello();

console.log("-------------------------")

function sayHi(FirstN,LastN){
console.log(`hai ${FirstN} ${LastN}`)
}

sayHi("Aditya", "Hakos");

/*  Function Return Value
Secara default function tidak menghasilkan value tapi kita bisa membuat function mengembalikan value dengan menggunakan kata kunci return dalam function
di*/


function persegi(sisi){
    return sisi * sisi;
}
console.log(persegi(5));
/*  nama function : persegi
nama parameter : sisi
parameter adalah variable yang exist dalam sebuah function
passing value kedalam function lewat parameter
return adalah hasil dari function
 */


// Function Return Value
