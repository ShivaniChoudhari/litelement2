import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppFooterShopping extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<P class="para">${this.compData.paraDesc1}</P>
        <p class="para">${this.compData.paraDesc2}</p>`
    }
}
customElements.define('app-footer-shopping', AppFooterShopping);