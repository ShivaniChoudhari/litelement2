import { html, LitElement } from "lit-element";

class AppNavItem extends LitElement {
  static get properties() {
    return {
      label: String,
      link: String,
    };
  }
  render() {
    return html`
      <a href="${this.link}">${this.label}</a></li>
    `;
  }
}

customElements.define("app-nav-item", AppNavItem);
