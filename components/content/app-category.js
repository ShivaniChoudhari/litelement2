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
        return html `<div class="container-fluid">
        <h1>${this.category.title}</h1>
        <br><br>
        
    </div>
    ${this.category.products.map((product) => (html `<app-product .product=${product}></app-product>`))}
        
    <br>
    <br> `
    }
}
customElements.define('app-category', AppCategory);