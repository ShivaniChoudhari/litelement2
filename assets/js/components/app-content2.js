import { html, css, LitElement } from 'lit-element';
// import { html, LitElement } from 'https://unpkg.com/lit-element?module';

import './content2/app-category2.js';
import './content2/app-filter';

class AppContent2 extends LitElement{
  static get styles(){
return css`

    * {
    box-sizing: border-box;
  }
  
  .row {
    display: flex;
    max-width:1485px;
  }
  
  /* Create two equal columns that sits next to each other */
  .column1 {
    flex: 20%;
    padding: 10px;
   /* Should be removed. Only for demonstration */
  }
  .column2 {
    flex: 80%;
    padding: 10px;
   /* Should be removed. Only for demonstration */
  }

  @media screen  and  (max width:814px){
    .column1{
      display:none;
    }
    .column2{
      flex:90%;
    }
  }

`
  }

  static get properties(){
    return{
      compData : Object
    }
  }
  render(){
    return html `

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
         <h1 class="title" style="margin-top:90px;padding-left:60px">Men</h1>

        <div class="row">
          
          <div class="column2" >
            ${this.compData.categories.map((category) => (html `<app-category2 .category=${(category)}></app-category2>`))}
 
          </div>  
          <div class="column1" >
            <app-filter></app-filter>
          </div>
        </div>`

}
  
}

customElements.define('app-content2', AppContent2);

