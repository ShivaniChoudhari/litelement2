import { html, LitElement } from 'lit-element';
// class MyElement extends LitElement {
//     render() {
//         return html`<h1>Hello ${this.message}!<my-dummy></my-dummy></h1>`;
//     }
//     // firstUpdated() {
//     //     fetch('person.json')
//     //         .then((r) => r.json())
//     //         .then((data) => this.message = data.name);
//     // }
// }
// customElements.define('my-element', MyElement);

class WebHeader extends LitElement{
    render(){
        return html `<header>
        <div class="row">
            <nav class="navbar navbar-expand-md bg-light fixed-top">
                <div class="col-md-1">
                    <a class="navbar-brand" href="#" style="padding-left: 25px;">
                        <img src="myntra.jfif" alt="myntra" style="width:60px;">
                    </a>
                </div>      
                <div class="col-md-5">
                      <!-- Links -->
                  <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link f1" href="men.html">MEN</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link f1" href="women.html">WOMEN</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link f1" href="#">KIDS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link f1" href="#">HOME & LIVING</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link f1" href="#">OFFERS</a>
                        </li>
                  </ul>
                </div>
                <div class="col-md-4">
                    <div class="topnav search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search for products" size="35" name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    </div>
                </div>
                <div class="col-md-2">
                    <i class='far fa-user-circle' style='font-size:30px'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-heart" style='font-size:30px'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-shopping-bag" style='font-size:30px'></i>
                </div>
            </nav>
        </div>  
    </header>`
    }
}
customElements.define('web-header', WebHeader );

// class MyDummy extends LitElement {
//     render() {
//         return html`<span>(for Dummies)</span>`;
//     }
// }
// customElements.define('my-dummy', MyDummy);

class WideImg extends LitElement{
    render(){
        return html `<img src="imgb.jpg" alt="imgb"  style="width:100%; height:300px">`
    }
}
customElements.define('wide-img', WideImg);

class MySlider extends LitElement{
    render(){
        return html `<div class="jumbotron jumbotron-fluid">
        <div class="container pt-3">
        <div id="demo" class="carousel slide " data-ride="carousel">

            <!-- Indicators -->
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              
            </ul>
            
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="myntra1.png" alt="myntra1" width="100%" height="300">
              </div>
              <div class="carousel-item">
                <img src="myntra2.jpg" alt="myntra2" width="100%" height="300">
              </div>
              
            </div>
        </div> 
        </div>   
    </div>`
    }
}
customElements.define('my-slider', MySlider);

class DiffCategories extends LitElement{
    render(){
        return html `<div class="container-fluid">
        <h1>CATEGORIES TO BAG</h1>
        <br><br>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="kurta.webp" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Kurtas and kurta sets</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="saree.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Sarees</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="dress.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Dresses</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="fnh.jpeg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Flats and heels</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="handbad.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Handbags</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="shorts.jfif" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Shorts</h4>
                      
                      
                    </div>
                  </div>
            </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="men.html"><img class="card-img-top" src="shirts.webp" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Shirts</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="men.html"><img class="card-img-top" src="tshirts.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">T-shirts</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="men.html"><img class="card-img-top" src="jeans.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Jeans</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="men.html"><img class="card-img-top" src="snt.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Shorts and trousers</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="men.html"><img class="card-img-top" src="cashoes.webp" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Casual Shoes</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-2">
                <div class="card" style="width:100%; height:300px">
                    <a href="men.html"><img class="card-img-top" src="caps.jpeg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Caps</h4>
                      
                      
                    </div>
                  </div>
            </div>
            </div>
        </div>
    </div> 
    <br>
    <br>    `
    }
}
customElements.define('diff-categories', DiffCategories);

class TopBrands extends LitElement{
    render(){
        return html `<div class="container-fluid">
        <h1>EXPLORE TOP BRANDS</h1>
        <br><br>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="nike.jpeg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Nike</h4>
                      <p class="card-text">Fitness Collection</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="levis.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Levi's</h4>
                      <p class="card-text"> FLat 50% Off</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="hrx.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">HRX</h4>
                      <p class="card-text">30-70% Off</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="hnmm.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">H&M</h4>
                      <p class="card-text">Starting at Rs. 399!</p>
                      
                    </div>
                  </div>
            </div>
           
           
            </div>
        </div>
    </div>
    <br>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="puma.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Puma</h4>
                      <p class="card-text"> Upto 40% Off</p> 
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="adid.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Adidas</h4>
                      <p class="card-text"> Starting at Rs. 499</p>                       
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="zara.jpg" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Zara</h4>
                      <p class="card-text"> Flat 20% Off</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="fila.png" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">Fila</h4>
                      <p class="card-text">Upto 40% Off</p>
                      
                    </div>
                  </div>
            </div>
            
           
            
        </div>
    </div>
    <br><br>`
    }
}
customElements.define('top-brands', TopBrands);

class WebFooter extends LitElement{
    render(){
        return html `<div class="jumbotron jumbotron-fluid">
        <div class="container">
            <footer class="foot mt-1">
                <div class="row">
                    <div class="col-md-2">
                        <h6 class="hea">ONLINE SHOPPING</h6>
                            <a href="#">Men</a><br>
                            <a href="#">Women</a><br>
                            <a href="#">Kids</a><br>
                            <a href="#">Home & Living</a><br>
                            <a href="#">Offers</a><br>
                            <a href="#">Gift cards</a><br>
                    </div>

                    <div class="col-md-2">
                        <h6 class="hea">USEFUL LINKS</h6>
                            <a href="#">Contact Us</a><br>
                            <a href="#">FAQs</a><br>
                            <a href="#">T&C</a><br>
                            <a href="#">Terms Of Use</a><br>
                            <a href="#">Track Order</a><br>
                            <a href="#">Shipping</a><br>
                    </div>
                    <!-- <div class="col-md-1"></div> -->
                    <div class="col-md-4">
                        <h6 class="hea">EXPERIENCE MYNTRA APP ON MOBILE</h6>
                        <br>
                        <a href="#"><img src="goplay.png" style="height:50px;width:30%"></a>
                        <a href="#"><img src="appst.png" style="height:50px;width:30%"></a> 
                    </div>
                    <div class="col-md-4">
                        <h6 class="hea">GET YOUR SHOPPING ON</h6>
                        <P class="para">Visit Myntra and transform your closet with garments for every occasion. We bring you all the top brands at your fingertips, with the best discounts and a wide selection to pick from. So log in to Myntra today and get shopping on-the-go!</P>
                        <p class="para">Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
                    </div>
                </div>
            </footer>
    </div>`
    }
}
customElements.define('web-footer', WebFooter);