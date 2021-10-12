import { html,css, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppSlider extends LitElement{
  static get styles(){
    return css`.carousel-inner img {
      width: 100%;
      /* margin-top: 2%; */
  }`
  }
  static get properties(){
    return{
      compData : Object
    }
  }
    render(){
        return html `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <div class="jumbotron jumbotron-fluid">
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