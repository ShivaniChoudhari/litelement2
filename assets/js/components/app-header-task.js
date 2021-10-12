import { html, css, LitElement } from 'lit-element';
export default class AppHeaderTask extends LitElement {
    static get styles() {
        return css`
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
          
          li {
            float: left;
          }
          
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
          
          li a:hover:not(.active) {
            background-color: #111;
          }
          
          .active {
            background-color: #04AA6D;
          }
        `
    }

    static get properties() {
        return {
            home : { type:String },
            news : {type : String },
            contact : { type:String },
            about : {type : String }
        };
    }
    constructor() {
        super();
        this.home = "Home";
        this.news = "News";
        this.contact = "Contact";
        this.about = "About";
    }
    render() {
        return html` 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
        <ul>
            <li><a href="#">${this.home ? html`${this.home}`  : null}</a></li>
            <li><a href="#">${this.news ? html`${this.news}`  : null}</a></li>
            <li><a href="#">${this.contact ? html`${this.contact}`  : null}</a></li>
            <li style="float:right"><a class="active" href="#">${this.about ? html`${this.about}`  : null}</a></li>
            
        </ul>


        `
    }
}
customElements.define('app-header-task', AppHeaderTask);