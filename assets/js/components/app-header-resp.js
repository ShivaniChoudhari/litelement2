import { html, css, LitElement } from "lit-element";
export default class AppHeaderResp extends LitElement {
  static get styles() {
    return css`
      
      .logo {
        display: inline-block;
        vertical-align: top;
        width: 55px;
        height: 40px;
        margin-left:40px;
        margin-right: 20px;
        // margin-top: 5px;
      }
      .logoprofile {
        display: inline-block;
        vertical-align: top;
        width: 25px;
        height: 25px;
        // margin-top:27px;
        margin-left: 80px;
      }
      .logoheart {
        display: inline-block;
        vertical-align: top;
        width: 23px;
        height: 25px;
        // margin-top: 26px;
        margin-left:20px;
      }

      .logocart {
        display: inline-block;
        vertical-align: top;
        width: 25px;
        height: 24px;
        margin-bottom:50px;
        // margin-top: 28px;
        margin-left:17px;
      
      }

      

      a {
        text-decoration: none;
        font-weight: bold;
        color: black;
      }

      .navigation-bar input[type="text"] {
        // margin-top: 25px;
        width: 430px;
        padding: 5px;
        margin-left: 200px;
      }


      .searchlogo{
        width:20px;
        height:20px;
      }


      // navbar resp

      .hamnav {
        width: 100%;
        
      }
      
      
      #hamitems a {
        
        flex-basis: 0;
        
        text-decoration: none;
        text-align: center;
        padding:10px;
      }
      
      
      /* (C) HIDE HAMBURGER */
      .hamnav label, #hamburger { display: none; }
    
      /* [ON SMALL SCREENS] */
    
      @media screen and (max-width: 1400px){
        .navigation-bar input[type="text"]{
          margin-left:100px;
          width:300px;
        }
      }

      @media screen and (max-width: 1240px){
        .navigation-bar input[type="text"]{
          margin-left:70px;
          width:250px;
        }
      }

      @media screen and (max-width: 1090px){
        .logoprofile{
          margin-left:60px;
        }
        .navigation-bar input[type="text"]{
          margin-left:40px;
          width:250px;
        }
      }

      @media screen and (max-width: 1020px){
        .navigation-bar input[type="text"]{
          margin-left:50px;
          width:180px;
        }
      }

      @media screen and (max-width: 960px){
        .navigation-bar input[type="text"]{
          display:none;
        }
        .navigation-bar input[type="button"]{
          display:none;
        }
      }

      
      @media screen and (max-width: 700px){
        .logo{
          margin-left:20px;
        }
      }
    
    
      @media screen and (max-width: 690px){
        /* (A) BREAK INTO VERTICAL MENU */
        #hamitems a {
          box-sizing: border-box;
          display: block;
          width: 100%;
          
        }
        /* (B) SHOW HAMBURGER ICON */
        .hamnav label { 
          
          display: inline-block; 
          color: #595656;
          
          font-style: normal;
          font-size: 33px;
          padding-right: 15px;
          float:right;
        }
      
        /* (C) TOGGLE SHOW/HIDE MENU */
        #hamitems { display: none; }
        .hamnav input:checked ~ #hamitems { display: block; }
        .logoprofile {
          display:none;
        }
        .logocart{
          display:none;
        }
        .logoheart{
          display:none;
        }
        .navigation-bar input[type="text"]{
          display:none;
        }
        .navigation-bar input[type="button"]{
          display:none;
        }
      }

    }

      
    `;
  }

  static get properties() {
    return {
      navlogo: { type: String },
      headingMen: { type: String },
      headingWomen: { type: String },
      headingKids: { type: String },
      headingHome: { type: String },
      headingOffers: { type: String },
      headingBeauty: { type: String },
      userNavIcon: { type: String },
      heartIcon: { type: String },
      cartIcon: { type: String },
    };
  }
  constructor() {
    super();
    this.navlogo =
      "https://www.gizbot.com/img/2015/05/11-1431326999-myntraimage1.jpg";
    this.headingMen = "";
    this.headingWomen = "WOMEN";
    this.headingKids = "KIDS";
    this.headingHome = "HOME AND LIVING";
    this.headingOffers = "ABOUT";
    this.headingBeauty = "BEAUTY";
    this.userNavIcon =
      "https://cdn-icons-png.flaticon.com/512/848/848043.png";
    this.heartIcon =
      "https://cdn-icons-png.flaticon.com/512/833/833300.png";
    this.cartIcon = "https://cdn-icons-png.flaticon.com/512/1124/1124199.png";
  }
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <link
        rel="stylesheet"
        href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
      />

      <a href="https://icons8.com/icon/82712/search"></a>

      <script src="https://kit.fontawesome.com/a076d05399.js"></script>

      <!-- Trial 2 -->
    <nav class="navigation-bar hamnav">

      

      <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger"/>

        <a href="#">
        ${this.navlogo
          ? html`<img src="${this.navlogo}" alt="navlogo" class="logo" />`
          : null}
          </a>

        <span id="hamitems">

        
        ${this.headingMen ? html` <a href="#">${this.headingMen}</a> ` : null}
        ${this.headingWomen
          ? html` <a href="#">${this.headingWomen}</a> `
          : null}
        ${this.headingKids ? html` <a href="#">${this.headingKids}</a> ` : null}
        ${this.headingHome ? html` <a href="#">${this.headingHome}</a> ` : null}
        ${this.headingOffers
          ? html` <a href="#">${this.headingOffers}</a> `
          : null}
        ${this.headingBeauty
          ? html` <a href="#">${this.headingBeauty}</a> `
          : null}
        
        </span>

        <input type="text" placeholder="Search for products, brands and more" />
        <input type="button" value="Search" style="height:30px;">
        

        
        <a href="#">
        ${this.userNavIcon
          ? html`<img src="${this.userNavIcon}" alt="navlogo" class="logoprofile" />`
          : null}
          </a>

          <a href="#">
        ${this.heartIcon
          ? html`<img src="${this.heartIcon}" alt="navlogo" class="logoheart" />`
          : null}
        </a>

          <a href="#">        
        ${this.cartIcon
          ? html`<img src="${this.cartIcon}" alt="navlogo" class="logocart"  />`
          : null}
        </a>


    </nav>

      <!-- Basic nav bar -->
      <!-- <ul>
                        <li><a href="#">${this.home
        ? html`${this.home}`
        : null}</a></li>
                        <li><a href="#">${this.news
        ? html`${this.news}`
        : null}</a></li>
                        <li><a href="#">${this.contact
        ? html`${this.contact}`
        : null}</a></li>
                        <li style="float:right"><a class="active" href="#">${this
        .about
        ? html`${this.about}`
        : null}</a></li>
                        
                    </ul> -->
    `;
  }
}
customElements.define("app-header-resp", AppHeaderResp );
