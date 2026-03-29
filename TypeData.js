// fundamental
console.log ("Hello world");
// digunakan untuk printout/menampilkan pesan atau data ke console browser

/* Variable adalah sebuah data
    variable yang sering digunakan adalah :
    - var (deprecated): 
    - let (recomend) : digunakan untuk variable yang nilainya bisa diubah
    - const (recomend) : digunakan untuk variable yang tidak boleh diubah

Type variable : ada 2 (Primitive & Non Primitive)
Primitive (Simple)
1. String : Untuk Teks
*/ let nama ;  // declaration
nama = "Aditya Hakos"; // assign
console.log (nama); // memanggil data nama

/* 
2. Number : Untuk angka 
*/ let umur = 28
console.log (umur); 

/*
3. Boolean : Untuk type data True/False
*/ let Login = true;
let Logout = false;

if (Login) {
  console.log("User sedang online");
} else {
  console.log("User offline");
}

console.log("-----------------Null & Undefined -------------------");

/*
4. Null :  biasa digunakan sebagai sebuah variable yang akan memiliki isi tapi tidak untuk saat ini (menunggu data dari database)
*/ let Null = null;
console.log (null);

// 5. undefined : Variabel sudah dideklarasikan, tapi belum diberi nilai.

/* let nilai;  
console.log (nilai); // hasil akan undefined karna belum ada nilai pada variable
 */
let nilai;
if (nilai === undefined ) {
console.log("Undefined");
} else {
  console.log("Defined");
}

console.log("----------------- Object ---------------------")

/* Non Primitive (kompleks)
1. Object : Digunakan untuk menyimpan data yang punya nama (key) 
*/ let user = { // menambah object
    nama : "Aditya Hakos",
    umur : 28,
    Login : true
};
console.table(user);

console.log("------------- Menghapus Object-------------------");
delete user["umur"]; // menghapus
console.table(user);

console.log("--------------Akses Property Object--------------");
// console.info(`atribut : ${nama variabel.atribut}`)
console.info(`nama : ${user.nama}`)

// analogi sederhana Object untuk mendeskripsikan biodata seseorang

console.log("------------------------In Operator-----------------------");

// In Operator = operator yang bisa dilakukan utk mengecek apakah sebuah property ada dalam object atau tidak
// Jika Property ada dalam Object maka hasil true
// Bisa digunakan untuk type data Array
// In Operator hanya akan mengecek apkaah sebuah property atau index ada / tidak walaupun nilainya NULL /Undefined

const person1 = {
name1 : "Yanto",
name2 : "Hakos"
}
const result = "name1" in person1;
console.log(result);

const person2 = {
  name3 : undefined,
  name4 : "Eva"
}
const result2 = "name3" in person2;
console.log(result2); // hasil akan tetap true karna nilai pada name3 sudah ada walaupun undefined

console.log("-------------------Array--------------------")

/* 
2. Array : bisa menyimpan lebih dari satu elemen 
data dimulai dari hitungan 0,1,2,3,....,dst
*/ let mobil = ["BRIO","JAZZ","RUSH","INOVA", "YARIS", "BMW"]; // BRIO [0], JAZZ[1], RUSH [2], INOVA [3], YARIS [4], BMW [5] 
console.log(mobil); // memanggil semua data di variable mobil
console.log(mobil[5]); // memanggil data [5]

// Cara menghitung jumlah array
console.log(mobil.length); // cara menghitung jumlah array

// Menambahkan Data Array
mobil.push ("Mazda"); // tipe data yang dimasukan tidak terbatas (string, number, dll)
console.table(mobil);

// Cara mengubah Data di Array
mobil[0] = "Honda"; // mengubah data array index ke 0 "Brio" ke "Honda"
console.table(mobil);

// Cara menambahkan Data Array ke Index ke 0
mobil.unshift("Mercy"); // digunakan untuk push data ke array index 0
console.table(mobil);

// PREFIX DAN POSTFIX

let pre=0; //prefix
console.log(++pre, 'ini adalah prefix'); // nilai sudah ditambah satu

let post=5;
console.log(post++, "ini adalah postfix");

// String template : digunakan untuk menyisipkan variabel atau ekspresi ke dalam string.

let Fname = "aditya";
let Mname = "hakos"; 
let Lname = "peris";
let fullname = `Name : ${Fname} ${Mname} ${Lname}`;

console.log(fullname);

// multiline : menggunakan backtik `` digunakan untuk pemanggilan dengan beda barisnya 

  let multiline = ` Content Moderator Specialis
  Japanese Language 
  English`;

  console.log(multiline);

  // KONVERSI STRING DAN NUMBER

  const val1 = "1"; // type data string 
  const val2 = 2 // type data number 
  const hasil = val1 + val2 ; 

  console.log(hasil); // hasil akan menjadi 12 karena bukan hasil dari penjumlahan

        // parseInt (string) : konversi dari string ke number (bilangan bulat)
        // parseFloat (string) :  konversi dari string ke number (bilangan pecahan)
        // Number (string) : konversi dari string ke number (bilangan pecahan atau pecahan)
        // .toString() : konversi dari number ke string 

                // parseInt
                let Hrgbuku = "1000"; 
                let jumlah = 3
                let total = parseInt(Hrgbuku) + jumlah // hasil akan 1003 karna nilai variable Hrgbuku diubah menjadi Number kemudian ditambahkan dengan jumlah

                console.log(total);
                //console.log(toString (Hrgbuku)); 

                //parseFloat
                let v = "3.3";
                let b = 2

                let c = parseFloat(v) + b
                console.log(c);

                // Number
                let i = "3";
                let o = "5";

                let hs = Number(i) + Number(o) // hasil akan berupa penjulahan 3+5 karna type data sudah diubah ke number
                console.log(hs);
                
                // .toString 

                let ab = 20
                let ac = 21 

                let ad = ab.toString() + ac.toString() // hasil akan berupa type data string dan bukan hasil dari penjumlahan 
                console.log(ad); 


                // NaN (Not a Number) nilai khusus di JavaScript yang digunakan ketika hasil operasi bukan angka yang valid, walaupun tipe datanya tetap number.
                // NaN yang dioperasikan dengan NaN akan menghasilkan NaN
              
                let usia = parseInt("lima");
                console.log(usia); // akan muncul NaN karna data tidak valid karna bukan number 
                // solusi 

                if (Number.isNaN(usia)){ // isNaN digunakan untuk mengecek apakah type data Number 
                  console.log("masukan angka!");
                }

                let ae = Number("wrong"); // NaN
                let aw = 100 
                let aq = ae + aw // Nan

                console.log(ae + aw); // semua yang dioperasikan dengan NaN akan menghasilkan NaN
    
  
     /* Opertator TypeOf : merupakan opertator yang bisa kita gunakan untuk melihat tipe data sebuah value / variable 
     
     Untuk type data "Undefined" maka hasil operator typeof "Undefined"
     Untuk type data "Null"  maka hasil operator typeof "Object"
     Untuk type data "Boolean" maka hasil operator typeof "Boolean"
     Untuk type data "Number" maka hasil operator typeof "Number"
     Untuk type data "BitInt" maka hasil operator typeof "bigint"
     Untuk type data "String" maka hasil operator typeof "string"
     Untuk type data "Symbol" maka hasil operator typeof "symbol"
     Untuk type data "Function" maka hasil operator typeof "object"
     Untuk type data lain maka hasil operator typeog "object"
     */

     let data;
     const typeData = typeof data;
     console.log(typeData); // akan menghasilkan undefined karna nilai variable kosong

     let data1 = 100
     const typeData1 = typeof data1;
     console.log(typeData1); // akan menghasilkan number karna variable yang dideklarasi berupa angka
     
    // ternary  : versi singkat dari if else dalam 1 baris
    let  usia1 = 20
    let stat = usia1 >=18 ? "Dewasa" : "Anak";
    console.log(stat); // Dewasa

console.log("---------- Nullish Coalesing---------")

    // Nullish Coalesing Operator (??): adalah null dan undefined 

   /*  let parameter;
    let Bdata = parameter;
    if (Bdata === undefined || data === null){
      Bdata = "Nilai Default";
    }
    console.log(Bdata); */
    
    // jika menggunakan nullish coalesing 

    let parameter;
    let dataC = parameter ?? " Nilai Default";
    console.log(dataC);
    


