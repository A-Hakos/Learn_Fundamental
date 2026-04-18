// OOP : Object Oriented Programming

    /* Object itu adalah ciri2 sebuah barang (properties dan method) 
    berbeda dengan array
    
    menciptakan class / template dari suatu object*/

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
console.log(Vans,loafers);
