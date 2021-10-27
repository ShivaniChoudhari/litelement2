import { html,css, LitElement } from 'lit-element';
import "../app-card.js"
export default class AppProduct extends LitElement {
    static get styles() {
      return css`
        /* .card-text
          {
              color:navy;
              font-weight: bold;
              font-size: large;
              text-align: center;
          
          
          }
          .container-fluid {
              
              display: flex;
              flex-wrap: wrap;
              flex-direction : column;
          } */
  
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
          /* background-color: #f0f0f0 ; */
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
  
        /* .txt-decoration {
          font-size:75%;
          color: grey;
          text-decoration: line-through;
        } */
  
        /* .header_font{
          font-size : 40px;
          padding-left : 10px;
        } */
  
        /* .mainHeading{
          font-size: 20px;
        } */
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
          image, price, description, header, offer,
      }  = this.product
      return html`
      
      <app-card .title=${header} .description=${description} .price=${price} .img=${image} .offer=${offer}></app-card>

      `;
    }
  }
  customElements.define("app-product", AppProduct);
