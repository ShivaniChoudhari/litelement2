import { html, LitElement } from 'lit-element';
export default class AppFooterExperience extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <div style="text-align:center">
        <a href="#" ><img src="${this.compData.img1}" style="height:50px;width:30%;padding:10px"></a>
        <a href="#"><img src="${this.compData.img2}" style="height:50px;width:30%;padding:10px"></a>
        </div>
        `
    }
}
customElements.define('app-footer-experience', AppFooterExperience);