import { html, LitElement } from 'https://unpkg.com/lit-element?module';
import './app-product.js';
// import './app-men.js';
export default class AppCategory extends LitElement{
  static get properties(){
    return{
      category : Object
      
    }
  }
    render(){
        return html `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <div class="container-fluid">
        <h1>${this.category.title}</h1>
        <br><br>
        
    </div>
    ${this.category.products.map((product) => (html `<app-product .product=${product}></app-product>`))}
        
    <br>
    <br> `
    }
}
customElements.define('app-category', AppCategory);