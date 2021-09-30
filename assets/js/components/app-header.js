import { html,css, LitElement } from 'lit-element';
export default class AppHeader extends LitElement{
    static get styles(){
        return css`.f1
        {
            font-size: medium;
            color: black;
            font-weight: bold;
        }
        
        .topnav .search-container {
          float: right;
        }
        
        .topnav input[type=text] {
          padding: 6px;
          margin-top: 8px;
          font-size: 17px;
          border: none;
        }
        
        .topnav .search-container button {
          float: right;
          padding: 6px 10px;
          margin-top: 8px;
          margin-right: 16px;
          background: #ddd;
          font-size: 17px;
          border: none;
          cursor: pointer;
        }
        
        .topnav .search-container button:hover {
          background: #ccc;
        };
        `
    }
    
    static get properties(){
            return{
                compData : Object,
            };
    }
    render(){
        return html ` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
        <header>
        <div class="row">
            <nav class="navbar navbar-expand-md bg-light fixed-top">
                <div class="col-md-1">
                    <a class="navbar-brand" href="#" style="padding-left: 25px;">
                        <img src="${this.compData.brand.brandLogo}" alt="myntra" style="width:60px;">
                    </a>
                </div>      
                <div class="col-md-5">
                      <!-- Links -->
                  <ul class="navbar-nav">
                        <!-- <li class="nav-item">
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
                        </li> -->
                        ${this.compData.navigation.map((nav) => (html`<li><a href="${nav.link}">${nav.label}</a></li>&nbsp;&nbsp;&nbsp;&nbsp;`))}
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
customElements.define('app-header', AppHeader );

