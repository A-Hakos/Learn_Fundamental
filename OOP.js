// OOP : Object Oriented Programming

    /* Object itu adalah ciri2 sebuah barang (properties dan method) 
    berbeda dengan array
    
    menciptakan class / template dari suatu object
    Konsep Dasar OOP 
    1. Encapsulation : pembungkusan data
    2. Inheritance : pewarisan
    3. Polymorphism : banyak bentuk
    4. Abstraction : penyederhanaan
    
    Class adalah blueprint, prototype untuk membuat object
    berisi deklarasi property dan function yg dimiliki object
    Object dibuat dari class
    
    
    */

    /* 

const Adidas = {
    type : "sneaker",
    brand : "adidas",
    harga : "1000000",
};

const Vans = {
    type : "loafers",
    brand : "vans",
    harga : "2000000",
};
// template = class
// class merupakan template dari sebuah object

class sepatu {
    type = "alasKaki";
    constructor (type, brand, harga){
        this.type = type;
        this.brand = brand;
        this.harga = harga;
    }
}
console.log(Vans,loafers); */

// add & delete

let person = {
    name : "Adit",
    umur : "28",
};

person.hobi = "gym"; // tambah key ke object
person.umur = "29"; // replace dari 28 menjadi 29
delete person.hobi;  // menghapus key dalam object

// person = variable = object
// variable object memiliki keys
// kita tidak mengubah / reassign value dari object. tapi kita mengubah keynya

console.log (person);

console.log("==============================================")


class karyawan {
    constructor(nama, jabatan, gaji) { //Constructor adalah method khusus dalam class yang otomatis dijalankan saat kamu membuat object baru.
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }
    perkenalan() {
        return `Halo, saya ${this.nama}, jabatan saya ${this.jabatan}`;
    }
    naikGaji(jumlah){
        this.gaji += jumlah;
        return `Gaji ${this.nama} sekarang ${this.gaji}`;
    }
}

const k1 = new karyawan("Aditya", "Front end", 5000000);

console.log(k1.perkenalan());
console.log(k1.naikGaji(10000000));

console.log("===========================================");

// Pewarisan / Inheritance

// class Manager mewarisi semua property/keys & method dari class karyawan
// Analogi class karyawan adalah template umum dan class Manager lebih spesifik

class Manager extends karyawan { // extends digunakan untuk inheritance 
    constructor(nama, jabatan, gaji, tim) {
        super(nama, jabatan, gaji); // super digunakan untuk memanggil constructor dari parent class karyawan
        this.tim = tim;
    }
    infoTim() {
        return `${this.nama} memimpin ${this.tim} orang`;
    }
}
const m1 = new Manager("Berto", "Manager", 30000000, 5);

console.log(m1.perkenalan());
console.log(m1.infoTim());

console.log("=================================================");

// contoh 2

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.stock = 0;
    }

    setStock(jumlah) {
        this.stock = jumlah;
    }
}

const komikOP = new Product("buku komik OP", 5000);
komikOP.author = "Bambang";
komikOP.releaseYear = 1999;
console.log (komikOP);

const komikDora = new Product("buku komik Dora", 4000);
komikDora.author = "ujang";
komikDora.releaseYear = 1990;
console.log (komikDora)

class Book extends Product {
    constructor(name, price, author, releaseYear) {
        super (name, price); 
        this.author = author;
        this.releaseYear = releaseYear;
    }
    showStock() {
    return `Stock ${this.name}: ${this.stock}`;
    } // override method showstock atau bisa dibilang ditimpa
}

const komikBona = new Book("buku komik Bona", 5000, " Yuyun", 1998);
console.log (komikBona);
komikBona.setStock(50);
console.log (komikBona.showStock());

console.log("===================================")

// Polymorphism

class Hewan {
    suara() {
        return "Hewan bersuara";
    }
}
class Kucing extends Hewan {
    suara() {
        return "Meong";
    }
}
class Anjing extends Hewan {
    suara() {
        return "Guk";
    }
}
const h1 = new Kucing();
const h2 = new Anjing();

console.log(h1.suara()); // Meong
console.log(h2.suara()); // Guk guk

// Getter setter maka function akan dianggap sbg property
// Getter digunakan untuk mengambil nilai property seperti function, tapi dipanggil seperti property biasa.
//  contoh Getter
class User {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }
}

const user1 = new User("test@gmail.com");
console.log(user1.email); // akses seperti property, bukan function

    