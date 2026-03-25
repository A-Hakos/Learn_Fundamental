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

/*
4. Null :  biasa digunakan sebagai sebuah variable yang akan memiliki isi tapi tidak untuk saat ini (menunggu data dari database)
*/ let Null = null;
console.log (null);

let nilai; // undefined (tidak terdefisini) karena variable tidak tidak ada nilainya 
console.log (nilai);

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

/* OPERATOR
+ :	Untuk penambahan
example : 
*/ let x = 5;
let y = 10;
console.log(x+y);
/*  
-	Subtraction : : digunakan untuk pengurangan 
example : 
*/ let q = 1;
let w = 2;
console.log(q-w);
/* 
*	Multiplication : Perkalian
example : 
*/ let e = 6;
let r = 9.5;
console.log(e*r);
/* 
**	Exponentiation : digunkan untuk perpangkatan
example :
*/ let t=3;
let u=3;
console.log(t**u);
/* 
/	Division : digunakan untuk pembagi 
example : 
*/ let a = 9;
let m = 3;
console.log(a/m);
/*
%	Modulus (Remainder) : akan menghasilkan sisa hasil pembagian dari dua angka
example :
*/ let f = 10;
let h = 4;
console.log(f%h);
/* 
++	Increment : digunakan untuk penambahan 1
example : 
*/ let motor = 1;
  while (motor <= 3){
  console.log(motor);
  motor++;
}
/* 
--	Decrement : digunakan untuk pengurangan 1 
example : 
*/ let bakso=15;
while (bakso>=10){
  console.log(bakso);
  bakso--;
}

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




