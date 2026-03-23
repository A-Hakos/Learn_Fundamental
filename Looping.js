// For Loop : digunakan saat jumlah iterasi yang sudah diketahui 
for (let i = 1; i <= 5; i ++){
    console.log("For Loop-" + 1);
}
/*  let i = 1 <- Inisialisasi
    i <=5 <- Kondisi
    i ++ <- Increment
*/ 

// While : Dipakai saat tidak tahu berapa kali harus mengulang.
let stok = 5;

while (stok > 0) {
  console.log("While : " + stok);
  stok--; // Berhenti saat stok habis
}

// Do While : digunakan saat ingin kode dijalankan minimal 1 kali, baru setelah itu dicek kondisinya. 
let angka = 10;

do {
  console.log("Nilai: " + angka);  // tetap jalan sekali!
  angka++;
} while (angka < 5);  // output : 10 karna menjalankan kode dulu, baru cek kondisi

// For Of : digunakan untuk mengambil nilai (value) langsung dari iterable
// Array
const buah = ["apel", "mangga", "jeruk"];

for (const item of buah) {
  console.log(item); // apel, mangga, jeruk
}

// Juga bisa untuk string 
for (const huruf of "Mumet") {
  console.log(huruf);  // Mumet
}

// For In : Dipakai untuk mengambil key (property) dari object
const siswa = { nama: "Budi", umur: 20, kelas: "XI" };

for (const key in siswa) {
  console.log(key + ": " + siswa[key]);
}

// break dan continue
for (let i = 1; i <= 10; i++) {
  if (i === 4) break;
  console.log(i);  // 1, 2, 3
}

/* Besok  
 continue — lewati iterasi ini, lanjut ke berikutnya
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) continue;
  console.log(i);  // 1, 3, 5  (angka genap di-skip)
}
*/