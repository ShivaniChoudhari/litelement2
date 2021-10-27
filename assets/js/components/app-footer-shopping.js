import { html, css, LitElement } from 'lit-element';
export default class AppFooterShopping extends LitElement{
    static get styles(){
        return css `.para
        {
            color: red;
            font-size: small;
        } `
    }
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