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

/* Non Primitive (kompleks)
1. Object : Digunakan untuk menyimpan data yang punya nama (key) 
*/ let user = {
    nama : "Aditya Hakos",
    umur : 28,
    Login : true
};
console.log (user);

// analogi sederhana Object untuk mendeskripsikan biodata seseorang

/* 
2. Array : bisa menyimpan lebih dari satu elemen 
data dimulai dari hitungan 0,1,2,3,....,dst
*/ let mobil = ["BRIO","JAZZ","RUSH","INOVA", "YARIS", "BMW"]; // BRIO [0], JAZZ[1], RUSH [2], INOVA [3], YARIS [4], BMW [5] 
console.log(mobil); // memanggil semua data di variable mobil
console.log(mobil[5]); // memanggil data [5]

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