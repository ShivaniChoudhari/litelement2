import { html,css, LitElement } from 'lit-element';
export default class AppHeader extends LitElement{

    static get styles() {
      return css`

        
        .logo {
          display: inline-block;
          vertical-align: top;
          width: 55px;
          height: 40px;
          margin-left:20px;
          margin-right: 20px;
          margin-top: -5px;
        }
        .logoprofile {
          display: inline-block;
          vertical-align: top;
          width: 25px;
          height: 25px;
          margin-left: 70px;
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
          margin-left:15px;
        
        }
  
        
  
        a {
          margin-left:7px;
          text-decoration: none;
          font-size:18px;
          font-weight: bold;
          color: black;
        }
  
        .navigation-bar input[type="text"] {
          width: 350px;
          padding: 5px;
          margin-left: 200px;
          // margin-right:20px;
        }
        .navigation-bar input[type="button"] {
          
          margin-right:20px;
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
      
        @media screen and (max-width: 1520px){
          .navigation-bar input[type="text"]{
            margin-left:100px;
            width:300px;
          }
        }
  
        @media screen and (max-width: 1315px){
          .navigation-bar input[type="text"]{
            margin-left:70px;
            width:250px;
          }
        }
  
        @media screen and (max-width: 1230px){
          .logoprofile{
            margin-left:50px;
          }
          .navigation-bar input[type="text"]{
            margin-left:35px;
            width:250px;
          }
        }
  
        @media screen and (max-width: 1195px){
          .navigation-bar input[type="text"]{
            margin-left:30px;
            width:150px;
          }
        }
  
        @media screen and (max-width: 1090px){
          .navigation-bar input[type="text"]{
            display:none;
          }
          .navigation-bar input[type="button"]{
            display:none;
          }
        }
  
        
        // @media screen and (max-width: 700px){
        //   .logo{
        //     margin-left:20px;
        //   }
        // }
      
      
        @media screen and (max-width: 810px){
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
  
      
  
        
      `;
    }
  
    static get properties() {
      return {
        
      };
    }
    constructor() {
      super();
     
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
  
        <!-- <a href="https://icons8.com/icon/82712/search"></a> -->
  
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  
        <!-- Trial 2 -->
      <nav class="navigation-bar hamnav" style="margin-top:30px;">
        <label for="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger"/>
  
          <a href="#">
          ${this.compData.brand.brandLogo
            ? html`<img src="${this.compData.brand.brandLogo}" alt="navlogo" class="logo" />`
            : null}
            </a>
  
          <span id="hamitems">
          ${this.compData.navigation.map((nav) => (html`<a href="${nav.link}">${nav.label}</a>&nbsp;&nbsp;&nbsp;&nbsp;`))}
          
        
          
          </span>
  
          <input type="text" placeholder="Search for products, brands and more" />
          <input type="button" value="Search" style="height:30px;">
          
  
          <a href="#">
            ${this.compData.navicons.map((nav) => (html`<img src="${nav}" class="logocart" style='font-size:30px'></i>&nbsp;&nbsp;&nbsp;&nbsp;`))}
        </a>
  
      </nav>
      `;
    }
  }

customElements.define('app-header', AppHeader );

