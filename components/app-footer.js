import { html,css, LitElement } from 'https://unpkg.com/lit-element?module';
import "./app-footer-list.js";
import "./app-footer-experience.js";
import "./app-footer-shopping.js";
export default class AppFooter extends LitElement{
    
    static get properties(){
        return{
            compData : Object,
        };
}
    render(){
        return html `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <div class="container-fluid">
        <div class="container">
            <footer class="foot mt-1">
                <div class="row">
                    <div class="col-md-2">
                        <app-footer-list .compData=${this.compData.first}></app-footer-list>
                    </div>

                    <div class="col-md-2">
                    <app-footer-list .compData=${this.compData.second}></app-footer-list>
                    </div>
                    <!-- <div class="col-md-1"></div> -->
                    <div class="col-md-4">
                        <h6 class="hea">${this.compData.experience.mobile}</h6>
                        <br>
                        <app-footer-experience .compData=${this.compData.experience}></app-footer-experience>
                        
                         
                    </div>
                    <div class="col-md-4">
                        <h4 class="hea">${this.compData.shopping.shopHeader}</h4>
                        <br>
                        <app-footer-shopping .compData=${this.compData.shopping}></app-footer-shopping>
                    </div>
                </div>
            </footer>
    </div>`
    }
}
customElements.define('app-footer', AppFooter);