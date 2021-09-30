import { html, LitElement } from 'https://unpkg.com/lit-element?module';
export default class AppWideImg extends LitElement{
    static get properties(){
        return{
            compData : Object
        }
    }
    render(){
        return html `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <img src="${this.compData.wideimg}" alt="imgb" style="height:300; width:100%">`
    }
}
customElements.define('app-wideimg', AppWideImg);
