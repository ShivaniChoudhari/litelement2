import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppFooterExperience extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<a href="#"><img src="${this.compData.img1}" style="height:50px;width:30%"></a>
        <a href="#"><img src="${this.compData.img2}" style="height:50px;width:30%"></a>`
    }
}
customElements.define('app-footer-experience', AppFooterExperience);