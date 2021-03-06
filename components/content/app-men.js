import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppMen extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">  
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.image}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.header}</h4>
                      <!-- <p class="card-text"> For primary & secondary school kids, you can shop for larger backpacks with subtle designs in solid colors. Our collection is inclusive of school bags & backpack.</p> -->
                      
                    </div>
                  </div>
            </div>
        </div>    `
    }
}
customElements.define('app-men', AppMen);