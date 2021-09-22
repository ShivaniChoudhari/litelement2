import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppSlider extends LitElement{
  static get properties(){
    return{
      compData : Object
    }
  }
    render(){
        return html `<div class="jumbotron jumbotron-fluid">
        <div class="container pt-3">
        <div id="demo" class="carousel slide " data-ride="carousel">

            <!-- Indicators -->
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              
            </ul>
            
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${this.compData.slider1}"  width="100%" height="300">
              </div>
              <div class="carousel-item">
                <img src="${this.compData.slider2}"  width="100%" height="300">
              </div>
              
            </div>
        </div> 
        </div>   
    </div>`
    }
}
customElements.define('app-slider', AppSlider);