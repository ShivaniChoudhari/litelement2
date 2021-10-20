// import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';
import { html, css, LitElement } from 'lit-element';

export default class AppGrid extends LitElement {
  static get styles(){
    return css` .grid-container {
      display: block;
      padding: 0 15px;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    .grid-container > .row {
     display:flex;
     flex-wrap:wrap;
    }

    `
  }

  static get properties() {
    return {
      category: Object
    }
  }

  render() {
    return html`
        <div class="grid-container">
          <div class = "row">
            <slot></slot>
          </div>
        </div>
`
  }

}

customElements.define('app-grid', AppGrid);