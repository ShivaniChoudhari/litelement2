import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppFooterExperience extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <a href="#"><img src="${this.compData.img1}" style="height:50px;width:30%"></a>
        <a href="#"><img src="${this.compData.img2}" style="height:50px;width:30%"></a>`
    }
}
customElements.define('app-footer-experience', AppFooterExperience);