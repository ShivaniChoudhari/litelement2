import { html,css, LitElement } from 'lit-element';
import "../app-card2"
export default class AppProduct2 extends LitElement {
    static get styles() {
      return css`
      
  
        //code of app card
  
        .mainCard {
          display: flex;
          /* flex-direction:row; */
          
        }
  
        .card {
          text-align: center;
          font-family: arial;
          flex-wrap:wrap;
          border: 1px solid lightgray;
          padding: 0;
          padding-bottom: 10px;
          margin: 5px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
  
        .price {
          font-size: 20px;
        }
        .html {
          display: flex;
        }
  
        a {
          text-decoration: none;
          font-size: 22px;  
          color: black;
        }
  
        h5,
        h4 {
          margin: 8px;
          padding: 0;
        }
      `;
    }
    static get properties() {
      return {
        product: Object,

      };
    }
  

  
    
    render() 
    {
      const {
          image, price, description, header, offer, ratings
      }  = this.product
      return html`
      
      <app-card2 .title=${header} .description=${description} .price=${price} .img=${image} .offer=${offer} .ratings=${ratings}></app-card2>

      `;
    }
  }
  customElements.define("app-product2", AppProduct2);
