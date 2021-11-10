import { html, LitElement } from 'lit-element';
// import { html, LitElement } from 'https://unpkg.com/lit-element?module';

import './content/app-wideimg.js';
import './content/app-slider.js';
import './content/app-category.js';
// import './content/app-brands.js';

class AppContent extends LitElement{
  static get properties(){
    return{
      compData : Object
    }
  }
  render(){
    return html `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <app-wideimg .compData=${this.compData.wideimg }></app-wideimg>
    <!-- <app-slider .compData=${this.compData.slider}></app-slider> -->
    <!-- <app-categories .compData=${this.compData.categories}></app-categories> -->
    ${this.compData.categories.map((category) => (html `<app-category .category=${(category)}></app-category>`))}
    
    `
    // <app-brands .compData=${this.compData.explore}></app-brands>
  }
  
}

customElements.define('app-content', AppContent);
// export default class WideImg extends LitElement{
//     render(){
//         return html `<img src="imgb.jpg" alt="imgb"  style="width:100%; height:300px">`
//     }
// }
// customElements.define('wide-img', WideImg);

// export default class MySlider extends LitElement{
//     render(){
//         return html `<div class="jumbotron jumbotron-fluid">
//         <div class="container pt-3">
//         <div id="demo" class="carousel slide " data-ride="carousel">

//             <!-- Indicators -->
//             <ul class="carousel-indicators">
//               <li data-target="#demo" data-slide-to="0" class="active"></li>
//               <li data-target="#demo" data-slide-to="1"></li>
              
//             </ul>
            
//             <!-- The slideshow -->
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <img src="myntra1.png" alt="myntra1" width="100%" height="300">
//               </div>
//               <div class="carousel-item">
//                 <img src="myntra2.jpg" alt="myntra2" width="100%" height="300">
//               </div>
              
//             </div>
//         </div> 
//         </div>   
//     </div>`
//     }
// }
// customElements.define('my-slider', MySlider);

// export default class DiffCategories extends LitElement{
//     render(){
//         return html `<div class="container-fluid">
//         <h1>CATEGORIES TO BAG</h1>
//         <br><br>
//     </div>
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="kurta.webp" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Kurtas and kurta sets</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="saree.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Sarees</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="dress.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Dresses</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="fnh.jpeg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Flats and heels</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="handbad.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Handbags</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="shorts.jfif" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Shorts</h4>
                      
                      
//                     </div>
//                   </div>
//             </div>
//             </div>
//         </div>
//     </div>
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="men.html"><img class="card-img-top" src="shirts.webp" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Shirts</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="men.html"><img class="card-img-top" src="tshirts.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">T-shirts</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="men.html"><img class="card-img-top" src="jeans.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Jeans</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="men.html"><img class="card-img-top" src="snt.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Shorts and trousers</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="men.html"><img class="card-img-top" src="cashoes.webp" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Casual Shoes</h4>
//                       <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-2">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="men.html"><img class="card-img-top" src="caps.jpeg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Caps</h4>
                      
                      
//                     </div>
//                   </div>
//             </div>
//             </div>
//         </div>
//     </div> 
//     <br>
//     <br>    `
//     }
// }
// customElements.define('diff-categories', DiffCategories);

// export default class TopBrands extends LitElement{
//     render(){
//         return html `<div class="container-fluid">
//         <h1>EXPLORE TOP BRANDS</h1>
//         <br><br>
//     </div>
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="nike.jpeg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Nike</h4>
//                       <p class="card-text">Fitness Collection</p>
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="levis.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Levi's</h4>
//                       <p class="card-text"> FLat 50% Off</p>
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="hrx.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">HRX</h4>
//                       <p class="card-text">30-70% Off</p>
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="hnmm.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">H&M</h4>
//                       <p class="card-text">Starting at Rs. 399!</p>
                      
//                     </div>
//                   </div>
//             </div>
           
           
//             </div>
//         </div>
//     </div>
//     <br>
    
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="puma.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Puma</h4>
//                       <p class="card-text"> Upto 40% Off</p> 
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="adid.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Adidas</h4>
//                       <p class="card-text"> Starting at Rs. 499</p>                       
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="zara.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Zara</h4>
//                       <p class="card-text"> Flat 20% Off</p>
                      
//                     </div>
//                   </div>
//             </div>
//             <div class="col-md-3">
//                 <div class="card" style="width:100%; height:300px">
//                     <a href="#"><img class="card-img-top" src="fila.png" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
//                     <div class="card-body">
//                       <h4 class="card-title" style="text-align: center;">Fila</h4>
//                       <p class="card-text">Upto 40% Off</p>
                      
//                     </div>
//                   </div>
//             </div>
            
           
            
//         </div>
//     </div>
//     <br><br>`
//     }
// }
// customElements.define('top-brands', TopBrands);