// Latihan function
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
