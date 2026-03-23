// if and else condition :

let pen = 1000

if (pen >= 2000 ){
  console.log("mahal");
} else {
  console.log("murah");
} 

/*Else if condition : digunakan saat ada dua atau lebih kondisi 
 example : */

 let nilai = 60;

if (nilai >= 90) {
  console.log("Grade A");
} else if (nilai >= 80) {
  console.log("Grade B");
} else if (nilai >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}


//  logical operator && "dan" harus memenuhi keseluruhan nilai var

let sepatu = "converse" 
let warna = "bnw"
let size = 43

if (sepatu == "converse" && warna == "bnw" && size == 44 ) {
  console.log("beli");
} else {
  console.log("jgn beli")
}

// logic || "OR" ketika salah satu nilai variable sudah memenuhi maka akan digunakan

let makan = "ayam"
let minum = "teh"
let lokasi = "SMG"

if ((makan == " bebek " &&  minum == "soda") || lokasi == "SMG"){ 
  console.log("order")
} else {
  console.log("no order")
} // hasil = "Order" cara baca : (makan = bebek "dan" minum soda) "atau" lokasi = SMG
 
// Logical != (tidak sama dengan )

let parfum = "timteng"

if (parfum !== "indo"){ 
  console.log("gunakan indo");
}

// switch case condition : digunakan untuk membandingkan satu variabel dengan beberapa kemungkinan nilai.

let mobil = "fortuner";

  switch(mobil){
    case "hrv":
    console.log ("honda");
    break;
    case "fortuner":
        console.log ("toyota");
    break;
    case "BMW":
        console.log ("BMW");
    break;
default:
    console.log ("ini bukan mobil");
  }

// ternary  : versi singkat dari if else dalam 1 baris
let  umur = 20
let stat = umur >=18 ? "Dewasa" : "Anak";
console.log(stat); // Dewasa

