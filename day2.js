/* Condition and Loop statement Javascript


1. If condition : Digunakan untuk menjalankan kode jika suatu kondisi bernilai true.
example : */
let tidur = 4
if (tidur <8 ) { // << condition
    console.log("kurang tidur");
}

/*
2. If else Condition : Digunakan jika ada dua kemungkinan kondisi (true atau false).
example : */
let makan = 1
if (makan<=3) {
    console.log("segera makan");
} else { 
    console.log("sudah kenyang");}

console.log ("====================");

/* 
Else if condition : digunakan saat ada dua atau lebih kondisi 
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
