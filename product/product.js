let productListDiv = document.getElementById("productList");


function createProducts (){

    function makeCopies(img,nam,p,dis,brnd,id){
       this.image = img;
       this.name = nam;
       this.price = p;
       this.discount = dis;
       this.brand = brnd;
       this.id = id;
    }
    let pro1 =  new makeCopies("https://www.lovelula.com/spree/products/8998/product/kimberly-sayer-ultra-light-organic-facial-moisturiser-spf30-120ml.jpg?1401199758","kimberly sayer ultra light Organic  Facial Moisturiser - SPF30 120 ML",140,20,"Kimberly Sayer",1)
    let pro2 =  new makeCopies("https://www.lovelula.com/spree/products/129189/product/lyonsleaf-beauty-balm-55ml.jpg?1611920835","Lyonsleaf Beauty Balm 60ml",130,10,"Lyonsleaf",2)
    let pro3 =  new makeCopies("https://www.lovelula.com/spree/products/728/product/kimberly-sayer-tangerine-and-calendula-healing-light-organic-night-cream-60ml.jpg?1373132683","Kimberly sayer Anti-Oxidant Daily moisturiser Cream",200,15,"Kimberly Sayer",3)
    let pro4 =  new makeCopies("https://www.lovelula.com/spree/products/21405/product/balm-balm-little-miracle-rosehip-serum-30ml.jpg?1527582763","Balm Balm Little Miracle Roseship Serum 30ml",250,20,"Balm Balm",4)
    let pro5 =  new makeCopies("https://www.lovelula.com/spree/products/6724/product/trilogy-certified-organic-rosehip-oil-20ml.jpg?1387276017","Triology certified Organic Roseship oil 20 ml",100,5,"Triology",5)
    let pro6 =  new makeCopies("https://www.lovelula.com/spree/products/728/product/kimberly-sayer-tangerine-and-calendula-healing-light-organic-night-cream-60ml.jpg?1373132683","Kimberly Sayer Tangerine & Calendula Healing light Organic Night Cream 60ml",280,10,"Kimberly Sayer",6)
    let pro7 =  new makeCopies("https://www.lovelula.com/spree/products/727/product/kimberly-sayer-aromatic-organic-night-repair-cream-60ml.jpg?1379327914","kimberly sayer Aromatic Organic Night Repair Cream",300,5,"Kimberly Sayer",7)
    let pro8 =  new makeCopies("https://www.lovelula.com/spree/products/4826/product/kimberly-sayer-restore-organic-anti-aging-cream-60ml.jpg?1376302140","Kimberly sayer Restore Organic Anti Aging Cream 60ml",120,25,"Kimberly Sayer",8)
    let pro9 =  new makeCopies("https://www.lovelula.com/spree/products/128768/product/lyonsleaf-calendula-cream-30ml.jpg?1610723998","Lyonsleaf Calendula Cream 30ml",320,30,"Lyonsleaf",9)
    let pro10 = new makeCopies("https://www.lovelula.com/spree/products/134165/product/lyonsleaf-zinc-and-calendula-cream-30ml.jpg?1626183696","Lyonsleaf Zinc Calendula Cream 30ml",230,8,"Lyonsleaf",10)
    let pro11 = new makeCopies("https://www.lovelula.com/spree/products/99045/product/lyonsleaf-mane-tamer-55ml.jpg?1561043890","Lyonsleaf Mane Tamer 55ml",200,16,"Lyonsleaf",11)
    let pro12 = new makeCopies("https://www.lovelula.com/spree/products/126844/product/lyonsleaf-try-oil-cleansing-pack.jpg?1605699104","Lyonsleaf Oil Cleansing pack",110,3,"Lyonsleaf",12)
    let pro13 = new makeCopies("https://www.lovelula.com/spree/products/4734/product/balm-balm-rose-floral-water-hydrosol-100ml.jpg?1611314971","Balm Balm Rose Floral Water 100ml",230,12,"Balm Balm",13)
    let pro14 = new makeCopies("https://www.lovelula.com/spree/products/7639/product/balm-balm-frankincense-deep-cleansing-balm-30ml.jpg?1530712622","Balm Balm Frankeinscense Deep Cleansing Balm 30ml",320,30,"Balm Balm",14)
    let pro15 = new makeCopies("https://www.lovelula.com/spree/products/1901/product/balm-balm-organic-muslin-face-cloths-pack-of-3.jpg?1373133391","Balm Balm Organic Muslin Face Cloths -pack of-3",135,15,"Balm Balm",15)
    let pro16 = new makeCopies("https://www.lovelula.com/spree/products/16177/product/balm-balm-frankincense-deep-cleansing-balm-60ml.jpg?1594130128","Balm Balm Frankencense Deep Cleansing Balm 60ml",230,10,"Balm Balm",16)
    let pro17 = new makeCopies("https://www.lovelula.com/spree/products/14004/product/trilogy-cream-cleanser-with-rosehip-oil-200ml.jpg?1411736571","Trioligy Cream Cleanser 200ml",230,12,"Triology",17)
    let pro18 = new makeCopies("https://www.lovelula.com/spree/products/7064/product/trilogy-vital-moisturising-cream-jar-with-rosehip-oil-60ml.png?1390572039","Triology vital Moisturising Cream Jar-with roseship oil 60ml",260,23,"Triology",18)
    let pro19 = new makeCopies("https://www.lovelula.com/spree/products/5931/product/trilogy-everything-balm-45ml.jpg?1618513673","Tiology eveything balm 45ml",310,30,"Triology",19)
    let pro20 = new makeCopies("https://www.lovelula.com/spree/products/73418/product/trilogy-very-gentle-cleansing-cream-150ml.jpg?1532617478","Triology Very Gentle Cleansing Cream",230,12,"Triology",20)

        let arr = []

        arr.push(pro1,pro2,pro3,pro4,pro5,pro6,pro7,pro8,pro9,pro10,pro11,pro12,pro13,pro14,pro15,pro16,pro17,pro18,pro19,pro20)


    if(localStorage.getItem("products") == null){
            localStorage.setItem("products",JSON.stringify(arr))
    }

}
createProducts()


function createElement(el) {
    let individualProDiv = document.createElement("div");
    individualProDiv.setAttribute("id", "gDiv");
    let img = document.createElement("img");
    img.src = el.image;

    img.setAttribute('id', 'gridImage');
    // console.log(img);
  let count =0
  let label = document.getElementById("basketCount")
    let addToCart = document.createElement("button");
  addToCart.innerHTML = ` <i class="fas fa-shopping-cart">ADD TO BASKET</i>`;
  addToCart.setAttribute("id","addToCart")
    addToCart.addEventListener("click", function () {
     
      add_To_Cart(el);
      count++
      label.innerHTML = `${count++}`
    });
    

    let p_name = document.createElement('p');
    p_name.setAttribute("id","proName")
    p_name.textContent = el.name;

    let p_brand = document.createElement('p');
    p_brand.setAttribute("id","proBrand")
    p_brand.textContent = el.brand;

    let allPricesSpan = document.createElement('div');
    allPricesSpan.setAttribute("id","floatAll")
    allPricesSpan.innerHTML = ` <h3 id = "h333"><s>&#x20B9</s>${el.price}</h3> &nbsp <p id ="opacity"><s>----</s></p> &nbsp <p id = "redColor">${el.discount}% off</p> `

    
    individualProDiv.append(img,p_brand, p_name, allPricesSpan,addToCart);
    productListDiv.append(individualProDiv);
}

function fetchProducts(d) {
    let data = d;
    productListDiv.innerHTML = null;

    data.forEach(function (el) {
        createElement(el);
    })
}
fetchProducts(JSON.parse(localStorage.getItem('products')));

/* AllProducts End */

/* -------------------------------------------------------------------- */


// let product = JSON.parse(localStorage.getItem("product"))

// function sortHIghTOLow(){
//       product= product.sort(function(a,b){
//      return b.price- a.price
//  })
//  fetchProducts(product)
// }

// function sortLowTOHigh(){
//   product = product.sort(function(a,b){
//     return a.price - b.price
//   })
//   fetchProducts(product)
// }

// function priceRange(){
//    let pr = product.filter(function(el){
//       if(el.price >= 100 && el.price <= 200){
//         // fatchProducts(el)
//         return el
//       //  console.log(el.price)
//       }
//     })
//     productListDiv.innerHTML = null;
//     pr.forEach(function (el) {
//         createElement(el);
//     })
//     fatchProducts(pr)
// }
// function priceRange1(){
//    let pr = productList.filter(function(el){
//       if(el.price >= 200 && el.price <= 300){
//         // fatchProducts(el)
//         return el
//       //  console.log(el.price)
//       }
//     })
//     // console.log("messae",pr)
//     productListDiv.innerHTML = null;
//     pr.forEach(function (el) {
//         createElement(el);
//     })
//     fatchProducts(pr)
// }
// function priceRange2(){
//    let pr = productList.filter(function(el){
//       if(el.price >= 300){
//         // fatchProducts(el)
//         return el
//       //  console.log(el.price)
//       }
//     })
//     productListDiv.innerHTML = null;
//     pr.forEach(function (el) {
//         createElement(el);
//     })
//     fatchProducts(pr)
// }
// // fatchProducts(priceRange(productList))

// function discountRange(){
//   let pr = productList.filter(function(el){
//       if(el.discount >= 10 && el.discount <= 20){
//         // fatchProducts(el)
//         return el
//       //  console.log(el.price)
//       }
//     })
//     productListDiv.innerHTML = null;
//     pr.forEach(function (el) {
//         createElement(el);
//     })
//     fatchProducts(pr)
// }
// function discountRange1(){
//   let pr = productList.filter(function(el){
//       if(el.discount >= 20 && el.discount <= 30){
//         // fatchProducts(el)
//         return el
//       //  console.log(el.price)
//       }
//     })
//     productListDiv.innerHTML = null;
//     pr.forEach(function (el) {
//         createElement(el);
//     })
//     fatchProducts(pr)
// }

// function brandDisplay1(){
//   let pr = productList.filter(function(el){
//     if(el.brand === "Lakme"){
//       // console.log(el)
//       return el
//     }
//   })
//   productListDiv.innerHTML = null;
//   pr.forEach(function(el){
//     createElement(el);
//   })
//   fatchProducts(pr)
// }
// function brandDisplay2(){

//   let pr = productList.filter(function(el){
//     if(el.brand === "Wow"){
//       // console.log(el)
//       return el
//     }
//   })
//   productListDiv.innerHTML = null;
//   pr.forEach(function(el){
//     createElement(el);
//   })
//   fatchProducts(pr)
// }
// function brandDisplay3(){

//   let pr = productList.filter(function(el){
//     if(el.brand === "Mamaearth"){
//       // console.log(el)
//       return el
//     }
//   })
//   productListDiv.innerHTML = null;
//   pr.forEach(function(el){
//     createElement(el);
//   })
//   fatchProducts(pr)
// }
// function brandDisplay4(){

//   let pr = productList.filter(function(el){
//     if(el.brand === "GoodVibes"){
//       // console.log(el)
//       return el
//     }
//   })
//   productListDiv.innerHTML = null;
//   pr.forEach(function(el){
//     createElement(el);
//   })
//   fatchProducts(pr)
// }
// To add to cart functionality start

function add_To_Cart(obj) {
  let arr;
  arr = localStorage.getItem("cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("cart"));
  }
  arr.push(obj);
  alert('Product added to cart successfully')
  localStorage.setItem("cart", JSON.stringify(arr));
}


// function showCart() {
//   window.location.href = "basket.html";
// }

