import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppWideImg extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<img src="${this.compData.wideimg}" alt="imgb" style="height:300; width=100%">`
    }
}
customElements.define('app-wideimg', AppWideImg);
