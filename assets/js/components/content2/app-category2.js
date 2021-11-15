// import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';
import { html, css, LitElement } from 'lit-element';
import './app-grid2.js';
import './app-product2.js';
// import './app-men.js';

export default class AppCategory2 extends LitElement {

  static get styles(){

    return css` .grid-container {
      display: block;
      padding: 0 15px;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }

   

    .grid-container > .row {
     display:flex;
     flex-wrap:wrap;

    }
    .col-4{
      width: 33.33%;
      
    }

    @media screen and (max-width: 1050px){

      .col-4{

        width: 50%;

      }

    }

    @media screen and (max-width: 950px){
      .col-4{
        width: 50%;
      }
      .title{
        text-align:center;
      }
    }


    @media screen and (max-width: 649px){

      .col-4{

        width: 100%;

     

      }

      .title{
        text-align:center;
      }
    
    }
    `


  }

  static get properties() {
    return {
      category: Object
    }

  }

  render() {

    return html`
     

        <app-grid2>


    ${this.category.products.map((product) => (html`<div class="col-4">
      
      <app-product2 .product=${product}></app-product2></div>`))}
    </app-grid2>
    `

  }

}

customElements.define('app-category2', AppCategory2);