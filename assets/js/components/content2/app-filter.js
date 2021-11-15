import { html, css, LitElement } from "lit-element";
export default class AppFilter extends LitElement {
  static get styles() {
    return css`
      .filterheading {
        padding: 5px 5px;
        margin: 0 3px;
      }

      /* The sidebar menu */
      .sidenav {
        // height: 80%; /* Full-height: remove this if you want "auto" height */
        width: 260px; /* Set the width of the sidebar */
        position: relative; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 2; /* Stay on top */
        /* Stay at the top */
        left: 0;
        background-color: #fafafa; /* Black */
        padding-top: 10px;
      }

      /* Slider css */
      [slider] {
        width: 180px;
        position: relative;
        height: 5px;
        margin: 45px 0 10px 0;
        align-items: center;
      }

      [slider] > div {
        position: absolute;
        left: 13px;
        right: 15px;
        height: 5px;
      }
      [slider] > div > [inverse-left] {
        position: absolute;
        left: 0;
        height: 5px;
        border-radius: 10px;
        background-color: #ccc;
        margin: 0 7px;
      }

      [slider] > div > [inverse-right] {
        position: absolute;
        right: 0;
        height: 5px;
        border-radius: 10px;
        background-color: #ccc;
        margin: 0 7px;
      }

      [slider] > div > [range] {
        position: absolute;
        left: 0;
        height: 5px;
        border-radius: 14px;
        background-color: #d02128;
      }

      [slider] > div > [thumb] {
        position: absolute;
        top: -7px;
        z-index: 2;
        height: 20px;
        width: 20px;
        text-align: left;
        margin-left: -11px;
        cursor: pointer;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
        background-color: #fff;
        border-radius: 50%;
        outline: none;
      }

      [slider] > input[type="range"] {
        position: absolute;
        pointer-events: none;
        -webkit-appearance: none;
        z-index: 3;
        height: 14px;
        top: -2px;
        width: 100%;
        opacity: 0;
      }

      div[slider] > input[type="range"]:focus::-webkit-slider-runnable-track {
        background: transparent;
        border: transparent;
      }

      div[slider] > input[type="range"]:focus {
        outline: none;
      }

      div[slider] > input[type="range"]::-webkit-slider-thumb {
        pointer-events: all;
        width: 28px;
        height: 28px;
        border-radius: 0px;
        border: 0 none;
        background: red;
        -webkit-appearance: none;
      }

      div[slider] > input[type="range"]::-ms-fill-lower {
        background: transparent;
        border: 0 none;
      }

      div[slider] > input[type="range"]::-ms-fill-upper {
        background: transparent;
        border: 0 none;
      }

      div[slider] > input[type="range"]::-ms-tooltip {
        display: none;
      }

      [slider] > div > [sign] {
        opacity: 0;
        position: absolute;
        margin-left: -11px;
        top: -39px;
        z-index: 3;
        background-color: #d02128;
        color: #fff;
        width: 28px;
        height: 28px;
        border-radius: 28px;
        -webkit-border-radius: 28px;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        text-align: center;
      }

      [slider] > div > [sign]:after {
        position: absolute;
        content: "";
        left: 0;
        border-radius: 16px;
        top: 19px;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-top-width: 16px;
        border-top-style: solid;
        border-top-color: #d02128;
      }

      [slider] > div > [sign] > span {
        font-size: 12px;
        font-weight: 700;
        line-height: 28px;
      }

      [slider]:hover > div > [sign] {
        opacity: 1;
      }

      /* The checkboxcontainer */
      .checkboxcontainer {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        margin-left: 10px;
        user-select: none;
        /* padding-top: 5px; */
      }

      /* Hide the browser's default checkbox */
      .checkboxcontainer input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      /* Create a custom checkbox */
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 18px;
        width: 18px;
        background-color: #eee;
      }

      /* On mouse-over, add a grey background color */
      .checkboxcontainer:hover input ~ .checkmark {
        background-color: #ccc;
      }

      /* When the checkbox is checked, add a blue background */
      .checkboxcontainer input:checked ~ .checkmark {
        background-color: #2196f3;
      }

      /* Create the checkmark/indicator (hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the checkmark when checked */
      .checkboxcontainer input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the checkmark/indicator */
      .checkboxcontainer .checkmark:after {
        left: 6px;
        top: 3px;
        width: 3px;
        height: 6px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }


      /* Styling Color Circles */
      .dot {
  height: 18px;
  width: 18px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
    `;
  }

  static get properties() {
    return {
      compData: Object,
    };
  }

  render() {
    return html`
      <div class="sidenav">
        <h4 class="filterheading">Filter</h4>
        <hr />
        <input type="radio" id="men" name="men" />
        <label for="men">Men</label><br />
        <input type="radio" id="women" name="women" />
        <label for="women">Women</label><br />
        <input type="radio" id="boy" name="boy" />
        <label for="boy">Boy</label><br />
        <input type="radio" id="girl" name="girl" />
        <label for="girl">Girl</label><br /><br />
        <!-- <input type="submit" value="Submit"> -->
        <hr />
      
        <h4 class="filterheading">Category</h4>
        <label class="checkboxcontainer">Shirts
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>
        <label class="checkboxcontainer">Tops
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="checkboxcontainer">Trousers
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="checkboxcontainer">Footwear
          <input type="checkbox" />
          <span class="checkmark"></span> </label><br />
        <hr />
      
        <!-- Slider code -->
        <h4>Price Range</h4>
        <div slider id="slider-distance">
          <div>
            <div inverse-left style="width:70%;"></div>
            <div inverse-right style="width:70%;"></div>
            <div range style="left:0%;right:0%;"></div>
            <span thumb style="left:0%;"></span>
            <span thumb style="left:100%;"></span>
            <div sign style="left:0%;">
              <span id="value">500</span>
            </div>
            <div sign style="left:100%;">
              <span id="value">10000</span>
            </div>
          </div>
          <input type="range" value="500" max="9999" min="500" step="1" oninput="
              this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
              let value = (this.value/parseInt(this.max))*100
              var children = this.parentNode.childNodes[1].childNodes;
              children[1].style.width=value+'%';
              children[5].style.left=value+'%';
              children[7].style.left=value+'%';children[11].style.left=value+'%';
              children[11].childNodes[1].innerHTML=this.value;" />
      
          <input type="range" value="10000" max="10000" min="500" step="1" oninput="
                       this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
                       let value = (this.value/parseInt(this.max))*100
                       var children = this.parentNode.childNodes[1].childNodes;
                       children[3].style.width=(100-value)+'%';
                       children[5].style.right=(100-value)+'%';
                       children[9].style.left=value+'%';children[13].style.left=value+'%';
                       children[13].childNodes[1].innerHTML=this.value;" />
        </div>
      
        <br />
        <hr />
      
        <!-- Brand names -->
        <div>
          <h4>Brand</h4>
      
      
          <label class="checkboxcontainer">Roadster
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Highlander
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Red Tape
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Flying Machine
            <input type="checkbox" />
            <span class="checkmark"></span> </label>
          <label class="checkboxcontainer">Peter England
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Arrow
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Denis Lingo
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Couper & Coll
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkboxcontainer">Riot
            <input type="checkbox" />
            <span class="checkmark"></span> </label>
      
        </div>
        <div>
      
          <h4>Color</h4>
      
      
      
      
      
          <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:red;"></span>
      
            <span style="font-size:16px;">Red</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>
      
      
      
          <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:blue;"></span>
      
            <span style="font-size:16px;">Blue</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>
      
          <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:pink;"></span>
      
            <span style="font-size:16px;">Pink</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>
      
          <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:grey;"></span>
      
            <span style="font-size:16px;">Grey</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>

            <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:cyan;"></span>
      
            <span style="font-size:16px;">Cyan</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>

            <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:Black;"></span>
      
            <span style="font-size:16px;">Black</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>

            <label class="checkboxcontainer">
      
            <span class="dot" style="background-color:purple;"></span>
      
            <span style="font-size:16px;">Purple</span>
      
            <input type="checkbox" />
      
            <span class="checkmark"></span> </label>
      
        </div>
      
      
      
      
      
      
      
      
      </div>
    `;
  }
}
customElements.define("app-filter", AppFilter);
