import { html, LitElement } from 'lit-element';

import './components/app-header.js';
import './components/app-content.js';

import './components/app-footer.js';

class AppShell extends LitElement{
    static get properties(){
        return{
            pageData : String,
        };
    }
    render(){
        if(this.pageData && this.pageData.header){
            return html `<app-header .compData=${this.pageData.header}></app-header>
            <app-content .compData=${this.pageData.content}></app-content>
        <app-footer .compData=${this.pageData.footer} ></app-footer>`
        }
       return html `<h3>Loading..</h3> ` 
    }

    firstUpdated(){
        fetch("assets/api/page.json")
        .then((r) => r.json())
        .then((data) => (this.pageData = data))
        .then(() => console.log(this.pageData));
    }
}
customElements.define('app-shell', AppShell);