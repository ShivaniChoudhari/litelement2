import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppFooterList extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<h4 class="hea">${this.compData.online.label}</h4>
        <!-- <a href="#">Contact Us</a><br>
        <a href="#">FAQs</a><br>
        <a href="#">T&C</a><br>
        <a href="#">Terms Of Use</a><br>
        <a href="#">Track Order</a><br>
        <a href="#">Shipping</a><br> -->
        <ul>${this.compData.navigation.map((nav) => (html`<li><a href="${nav.link}">${nav.label}</a></li>`))}</ul>`
    }
}
customElements.define('app-footer-list', AppFooterList);