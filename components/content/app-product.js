import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppProduct extends LitElement{
    static get properties(){
        return{
            product : Object
        }
    }
    render(){
        return html `<div class="container-fluid">
        <div class="row">
            <div class="col-md-2">  
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.product.image}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.product.header}</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      ${this.product.offer ? html`<h5>${this.product.offer}</h5>`  : null}
                    </div>
                  </div>
            </div>
        </div>    `
    }
}
customElements.define('app-product', AppProduct);
