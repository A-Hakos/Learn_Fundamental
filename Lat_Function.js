// Latihan function 20 Apr
// Function dasar

//Buat function bernama sapa yang menampilkan teks:
function SayHello(){
    console.log(`hai selamat malam`)
}
SayHello();

//  Buat function tampilNama yang menerima parameter nama lalu tampilkan:
function SayHello2(name){
    console.log(`Hai ${name}`)
}
SayHello2("Hakos");

/* Buat function salam(waktu = "pagi") */
function salam (waktu = "pagi"){
    return (`Selamat ${waktu}`);
}
console.log(salam()); // selamat pagi
console.log(salam("Malam")); // selamat malam

//arrow function
const salam1 = (waktu = "pagi") => `Selamat ${waktu}`;
console.log(salam());

const greetings = (time = "morning") => `Good ${time}`;
console.log(greetings());

// Buat function tambah yang menerima 2 angka dan menampilkan hasil penjumlahan.
function Penjumlahan(x,y){
    const z = x + y
    console.log( x  + ` ditambah ` + y + ` = ` + z)
}
Penjumlahan(3,1);

// Buat function perkalian 3 angka 
function Perkalian (a,b,c){
    const d = a * b * c
    console.log(`${a} kali ${b} kali ${c} = ${d}`);
}
Perkalian (2,2,3);



/* Buat function cekGenap yang menerima angka, lalu:
Jika genap → tampilkan "Genap"
Jika ganjil → tampilkan "Ganjil"
 */

function cekGenap(angka) {
    if(angka % 2 !== 0 ){
        console.log("Ganjil");
    }  else {
        console.log("Genap");
    }
}
cekGenap (5);
cekGenap (2);

// Buat function luasPersegi yang menerima sisi, lalu mengembalikan luasnya.

function Persegi(sisi) {
    const luas = sisi * sisi
    console.log(`Luas persegi adalah ` + sisi * sisi )
}
Persegi(5);

/* Buat function nilaiLulus:
Jika nilai ≥ 75 → "Lulus"
Jika < 75 → "Tidak Lulus" */

function nilaiLulus(nilai) {
    if(nilai >= 75) {
        console.log(`Lulus`);
    } else if (nilai < 75) {
        console.log(`tidak lulus`);
    } else 
        console.log(`bukan nilai`);
}
nilaiLulus(`90`);

/* Buat function kali yang mengembalikan hasil perkalian (pakai return, bukan console.log).*/

function luasSegitiga(alas,tinggi){
    return (0.5 * alas * tinggi)
}
console.log(luasSegitiga(3,5));

// bentuk arrow function 
const luasSegitiga2 = (alas, tinggi) => 0.5 * alas * tinggi;
console.log(luasSegitiga2(3,5));

/* Buat function diskon:
Harga > 100000 → diskon 10%
Selain itu → tidak ada diskon
Kembalikan harga setelah diskon */
function diskon(harga) {
    if (harga > 100000) {
        return harga - (harga * 0.10);
    } else {
        return harga
    }
}

console.log(diskon(120000)); // hasil akan dikurangi setelah diskon
console.log(diskon (800));

/* Buat function max yang menerima 2 angka dan mengembalikan angka terbesar. */
function max(ab,ac){
    if(ab > ac){
        return ab;
    } else {
        return ac;
    }
}
console.log(max(10,20));

// bentuk arrow function 
const max1 = (ab1, ac1) => ab1 > ac1 ? ab1 : ac1;
console.log(max1(30,20));

console.log("----------------- 21 April 2026 ---------------------");

// Latihan fundamental 25 Apr

//Buat function halo() yang menampilkan teks:
function Halo(txt){
    console.log(`Halo ${txt}`)
}
Halo(`Dunia`)

// Buat function sapa(nama
function sapa(name){
    console.log(`Malam ${name}`)
}
sapa(`Hakos`)

// Buat function tambah(a, b)
function tambah(a1,b1){
    const c1 = a1 + b1
    console.log(`${a1}` + ` ditambah ` + `${b1}` + ` = ` + `${c1}`)
}
tambah(2,2)

// Buat function kurang(a, b)

function kurang (a1, b1){
    const c2 = a1 - b1
    console.log(`${a1}` + ` dikurang ` + `${b1}` + ` = ` + `${c2}`)
}
kurang(3,1)

/* Buat function cekPositif(angka):
return "Positif" jika angka > 0
return "Negatif" jika angka < 0
return "Nol" jika angka = 0 */

function cek(number){
    if(number > 0){
        console.log(`positif`);
    } else if (number < 0){
        console.log(`negatif`);
    } else if (number == 0) {
        console.log(`Nol`);
    } else {
        console.log(`bukan angka`)
    }
}
cek(17)

// Buat function luasLingkaran(r) (gunakan π = 3.14).

function luasLingkaran(r){
    return(3.14 * r * r)
}
console.log(luasLingkaran(10))

/*  Buat function cekUmur(umur):
 return "Dewasa" jika ≥ 18
return "Anak-anak" jika < 18 */

function cekUmur(umur){
    if (umur >= 18) {
        return(`Dewasa`)
    } else {
        return (`Anak`)
    }
}
console.log(cekUmur(71))

function cekUmurfix(umurfix){
    return umurfix >= 18 ? "Dewasa" : "Anak";
}
console.log(cekUmurfix(6))


// Buat function panjangString(str) yang mengembalikan panjang string.
function panjangString(str) {
    return str.length;
}
console.log(panjangString(`Hakos`)) // hasilnya berupa number dari jumlah karakter string 

// Buat function totalArray(arr) yang menjumlahkan semua isi array.
function totalArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(totalArray([21,22,23]))

// Buat sebuah function sapa yang menerima parameter nama, lalu tampilkan. Kemudian buat function proses yang menerima callback, dan panggil callback tersebut dengan nama "Adit".
function halo(Nama){
    console.log(`Halo ${Nama}`);
}
function prosesUser (callback){
    const Nama = "Hakos";
    callback(Nama); // memanggil callback
}
prosesUser(halo)

/* Buat function hitung(z1, x1, callback) yang:
menerima 2 angka
menerima callback
callback digunakan untuk mengolah hasil penjumlahan a + b*/

function result(z1,x1, callback){
    const hasil = z1 + x1;
    callback(hasil);
}
result(5,2, function(hasil){
    console.log(hasil);
});

/* function pengali(y1,y2, callback){
    const hasil1 = y1 * y2
    callback(hasil1);
}
pengali(2,2, function(hasil1){
    console.log(hasil1);
});
 */
// arrow function 
const pengali = (y1,y2, callback) => callback(y1 * y2);
pengali (2,2, (hasil1) => console.log(hasil1));

// function login 
function login(username, password, successCallback, errorCallback){
    if (username === "Adit" && password === "Hasky") {
        successCallback();
    } else {
        errorCallback();
    }
}
login(
    "Adit", "Hasky", 
    () => console.log("Login Sukses"),
    () => console.log("Login Failed")
);

// Validasi email
// cek apakah email mengandung @ dan .
// return true atau false

function validasiEmail(email, trueCallback, falseCallback) {
    if (email.includes("@") && email.includes(".")) {
        trueCallback();
    }else {
        falseCallback();
    }
}
validasiEmail(
    "aditya@gmail.com",
    () => console.log("True"),
    () => console.log("False")
);

// Buat function validasiPassword(password)
// jika panjang password ≥ 6 → "Valid"
// selain itu → "Tidak valid"

function validasiPassword(pass, trueCallback, falseCallback){
    if (pass.length >= 6){
        trueCallback();
    } else {
        falseCallback();
    }
} 
validasiPassword(
    "lontongopor",
    () => console.log("True"),
    () => console.log("False")
);

console.log("---------------------------------");

/*  Validasi pass kompleks
Password harus:
minimal 8 karakter , ada huruf kecil , ada huruf besar
ada angka , ada simbol (!@#$%^&*) , tidak boleh ada spasi */

/* function validasipass(passw, sukses, error){
    if (passw.length < 8) return error("Min 8 Karakter");
    if (passw.includes(" ")) return error("Tidak boleh spasi");
    if (!/[a-z]/.test(passw)) return error("Tidak ada huruf kecil");
    if (!/[A-Z]/.test(passw)) return error("Tidak ada huruf besar");
    if (!/[0-9]/.test(passw)) return error("Tidak ada angka");
    if (!/[!@#$%^&*]/.test(passw)) return error("Tidak ada simbol");

    sukses("Password sudah sesuai");
}
validasipass(
    "Adittttt",
    (msg) => console.log("Sukses : ", msg),
    (err) => console.log("Error : ", err)
); */

function validasiPassword(password, success, error) {
  const errors = [];

  if (password.length < 8) errors.push("Minimal 8 karakter");
  if (password.includes(" ")) errors.push("Tidak boleh ada spasi");
  if (!/[a-z]/.test(password)) errors.push("Tidak ada huruf kecil");
  if (!/[A-Z]/.test(password)) errors.push("Tidak ada huruf besar");
  if (!/[0-9]/.test(password)) errors.push("Tidak ada angka");
  if (!/[!@#$%^&*]/.test(password)) errors.push("Tidak ada simbol");

  if (errors.length > 0) {
    error(errors);
  } else {
    success("Password sesuai");
  }
}
validasiPassword(
  "@Adit1245",
  (msg) => console.log("Sukses:", msg),
  (errs) => console.log("Error:", errs)
);