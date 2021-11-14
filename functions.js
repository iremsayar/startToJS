//
//  JS FONSKIYONLAR GIRIS
//

//defaultu olanları sona yaz
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : " + productName 
    + "adedi: " + quantity)
}
addToCart(5)
addToCart(10,"Ayakkabı")
addToCart(4,"Yumurta")

///////////////////////////////////////////////////////
// degiskene fonksiyon atama
let sayHello = () => {
    console.log("Hello World!")
} 
sayHello();

///////////////////////////////////////////////////////
// SEPETE TEK ÜRÜN EKLEME
let product1 ={
    productName:"Elma",
    quantity:5,
    unitPrice:10
}
let product2 ={
    productName:"Elma",
    quantity:5,
    unitPrice:10
}
let product3 ={
    productName:"Elma",
    quantity:5,
    unitPrice:10
}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Miktar : "+product.quantity)
    console.log("Fiyat : " +product.unitPrice)
}
addToCart3(product1)
addToCart3(product2)
addToCart3(product3)

///////////////////////////////////////////////////////
// SEPETE BÜTÜN ÜRÜNLERİ EKLEME

let products =[ 
    {    productName:"Elma",
    quantity:5,
    unitPrice:10},
    {    productName:"Armut",
    quantity:4,
    unitPrice:15},
    {    productName:"Ananas",
    quantity:3,
    unitPrice:20}
]

function addTocart4(products) {
    console.log(products)
}
addTocart4(products)

/////////////////////////////////////////////////////////////

//
// function add(number1,number2) {
//     console.log(number1+number2)
// }
// add(20,30)
//
//
// FONSİYONA KAÇ DEGER GELECEĞİ BİLİNMİYOR İSE:
function add(...numbers) //... -> rest operatörü
{
    console.log(numbers)
}
add(20)
add(20,50,70)
add(20,50,70,90,440,1990,2000)


//split ...
let numbers=[40,60,500,20,30,55]
Math.max(...numbers)
///////////////////////////////////////////////////

let [marmara, kardeniz,akdeniz,[marmaraSehirleri]] = [
    {name:"Marmara", population:"20M"},
    {name:"Karadeniz", population:"10M"},
    {name:"Akdeniz",population:"15M"},
    [
        ["Istanbul","Kocaeli"],
        ["Samsun","Sinop"],
        ["Antalya","Mersin"],
    ]
]
console.log(marmara.name) //Marmara
console.log(marmara.population) // 20M
console.log(marmaraSehirleri) // ["Istanbul","Kocaeli"]

///////////////////////////////////////////////////////////////

// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...sayilar) {
        //console.log(sayilar)

        for (let i = 0; i < sayilar.length; i++) {
            if ( sayilar[i]!==2 & sayilar[i] % 2 == 0)
            { sayilar[i]= sayilar[i] +" NotPrime"}
            else if( sayilar[i]!==3 & sayilar[i] % 3 ==0)
            { sayilar[i] = "NotPrime"}
            else if(sayilar[i]!==5 & sayilar[i] % 5 ==0)
            { sayilar[i]="NotPrime" }
            else if ( sayilar[i]!==7 & sayilar[i] % 7 ==0 )
            {sayilar[i]="NotPrime"}
            else {sayilar[i]="IsPrime"}
        }
        console.log(sayilar)
}
let sayilar = [1,2,7,8,91,22,34,13,55,67,89]
findPrime(...sayilar)
