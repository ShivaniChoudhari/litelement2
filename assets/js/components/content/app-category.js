// import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';
import { html, css, LitElement } from 'lit-element';
import './app-grid.js';
import './app-product.js';
// import './app-men.js';

export default class AppCategory extends LitElement {

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
<<<<<<< HEAD
    @media screen and (max-width: 1050px){

      .col-4{

        width: 50%;

      }

    }




    @media screen and (max-width: 649px){

      .col-4{

        width: 100%;

     

      }

=======
    @media screen and (max-width: 950px){
      .col-4{
        width: 50%;
      }
>>>>>>> ce9daf3bcc8a9691877726d1cb7da7d75410fb7e
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
        <app-grid>
          <h1>${this.category.title}</h1>
        </app-grid>

        <app-grid>


    ${this.category.products.map((product) => (html`<div class="col-4">
      
      <app-product .product=${product}></app-product></div>`))}
    </app-grid>
    `

  }

}

customElements.define('app-category', AppCategory);