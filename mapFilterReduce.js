//////////////////////////////////////
let cart = [
    {id:1,productName:"Telefon",quantity:2,unitPrice:4000},
    {id:2,productName:"Laptop",quantity:1,unitPrice:8000},
    {id:3,productName:"Kalem",quantity:3,unitPrice:5},
    {id:4,productName:"Kitap",quantity:4,unitPrice:20},
    {id:5,productName:"Bardak",quantity:2,unitPrice:40},
    {id:6,productName:"Defter",quantity:5,unitPrice:10}
]

//referans tip olduğu için bu fonksiyon ekleme yapar
function addToCart(sepet) {
    sepet.push({id:7,productName:"Tabak",quantity:2,unitPrice:20})

}

addToCart(cart)
console.log(cart)

/////////////////////////////////////////////
//değer tip olduğu için sayi 10 olarak kalacak, sayı artmaz
let sayi=10
function sayiArttir(number) {
    number +=1
}
sayiArttir(sayi)
console.log(sayi)
//////////////////////////////////////////////


//-> ARRAYI TEK TEK DOLAS
//-> HER ÜRÜNE TAKMA İSİM (product)
//-> ürünler ne kadar tuttu liste halinde göster
//MAP 

console.log("<ul>")

cart.map(product=>{
    console.log( "<li>" + product.productName + " : " 
    + product.unitPrice * product.quantity + "<li/>")
    });

console.log("</ul>")

////////////////////////////
//sepette 2den fazla alınan ürünler için 
//yeni bir array oluştur
//FILTER

let quantityOver2 = cart.filter(product =>
    product.quantity>2);

console.log(quantityOver2)

/////////////////////////////
//toplam sepet tutarını hesapla
//acc-> accumulator(başlangıç) = 0 (toplamaya kaçtan başlansın)
//REDUCE

let total = cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)
console.log("Sepet tutarı: "+ total)

