import { html, css, LitElement } from "lit-element";

export default class AppCard extends LitElement {
  static get styles() {
    return css`
    .mainCard {
  display: flex;
  flex-direction:row;
}

      
      .card {
        // width: 16.5%;
        text-align: center;
        font-family: arial;
        
        border: 1px solid lightgray;
        padding:0;
        margin:5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        width:100%;
        margin: 10px auto;


        

        /* background-color: #f0f0f0 ; */
      }

     

      .danger {background-color: #f44336;}

      .price{
        font-size:20px;
      }
      .html{
        display:flex;
        
      }
 

      a {
        text-decoration: none;
        font-size: 22px;
        color: black;
      }

      .txt-decoration {
        font-size:75%;
        color: grey;
        text-decoration: line-through;
      }

      .header_font{
        font-size : 40px;
        padding-left : 10px;
      }

      .mainHeading{
        font-size: 20px;
      }



    `;
  }
  static get properties() {
    return {
      img: { type: String },
      title: { type: String },
      description: { type: String },
      offer: { type: String },
      price: { type: Number },
      actualPrice: { type: String },
      actionLabel: { type: String },
      actionLink: { type: String },
      hasBorder: { type: Boolean },


    };
  }
  constructor() {
    super();
    this.img = ["https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg",

    ];

    this.title = ["Biba"];
    this.description = ["Printed khadi dress"];
    this.offer = " Flat 50% off";
    this.price = [2500];
    this.actualPrice = ["₹3500"];
    this.actionLabel = "Shop Now";
    this.actionLink = "#";




  }

  render() {
    return html`

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script src='https://kit.fontawesome.com/a076d05399.js'></script>







<div class="card">

  <div class="card-body">



    ${this.img
        ? html`<img src="${this.img}" alt="John" style="width:100%; height:300px;" />`

        

        : null}
    <div class="card-body">

      ${this.title ? html` <h4 class="mainHeading"> ${this.title}</h4> ` : null}

      ${this.description
          ? html` <p class="Description" style="font-size:18px; margin:-10px 4px 15px 4px">${this.description}</p> `
          : null}

      <!-- ${this.price ? html` <span class="price">${this.price}</span>
      <span class="txt-decoration">${this.actualPrice}</span>` : null} -->



      ${this.offer ? html` <span class="offer" style="color:red; font-size:15px">${this.offer}</span> ` : null}


      
      <br><br>
      ${this.actionLabel
          ? html` <a href="${this.actionLink}" style="font-size:15px;"><u> ${this.actionLabel} </u></a> `
          : null}
      <br><br>
    </div>
  </div>

</div>

      
    `;
  }
}
customElements.define("app-card", AppCard);
