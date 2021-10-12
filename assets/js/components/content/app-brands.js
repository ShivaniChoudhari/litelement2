import { html, LitElement } from 'https://unpkg.com/lit-element?module';
import './app-top.js'
export default class AppBrands extends LitElement{
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
        <h1>${this.compData.title}</h1>
        <br><br>
    </div>
    <!-- <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.top.image1}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.top.header1}</h4>
                      <p class="card-text">${this.compData.top.para1}</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.image2}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header2}</h4>
                      <p class="card-text"> ${this.compData.explore.top.para2}</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.iamge3}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header3}</h4>
                      <p class="card-text">${this.compData.explore.top.para3}f</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.image4}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header4}</h4>
                      <p class="card-text">${this.compData.explore.top.para4}</p>
                      
                    </div>
                  </div>
            </div>
           
           
            </div>
        </div>
    </div>
    <br>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.image5}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header5}</h4>
                      <p class="card-text"> ${this.compData.explore.top.para5}</p> 
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.image6}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header6}</h4>
                      <p class="card-text"> ${this.compData.explore.top.para6}</p>                       
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.image7}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header7}</h4>
                      <p class="card-text"> ${this.compData.explore.top.para7}</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-3">
                <div class="card" style="width:100%; height:300px">
                    <a href="#"><img class="card-img-top" src="${this.compData.explore.top.image8}" class="rounded-circle" alt="Card image" style="width:100%; height:200px"></a>
                    <div class="card-body">
                      <h4 class="card-title" style="text-align: center;">${this.compData.explore.top.header8}</h4>
                      <p class="card-text">${this.compData.explore.top.para8}</p>
                      
                    </div>
                  </div>
            </div>
            
           
            
        </div>
    </div> -->
    ${this.explore.top.map((top) => (html `<app-top .top=${top}></app-top>` ))}
    <br><br>`;
    }
}
customElements.define('app-brands', AppBrands);