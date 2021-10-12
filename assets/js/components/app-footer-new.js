import { html, css, LitElement } from "lit-element";
export default class AppFooterNew extends LitElement {
    static get styles() {
        return css`

*{
    margin:0;
    padding:0;
}
.foot{
    background: #f4f5f5;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
   padding: 10px;
   margin-left:100px;
   margin-right:100px;
  
}

.grid-item-1{
    text-align: left;
    width:190px;

    font-size: 16px;
    padding:15px;
    
}

.grid-item-2{
    text-align: left;
    width:190px;
    font-size: 16px;
    padding:15px;
    
}


.grid-item-3{
    
    width:380px;
    font-size: 16px;
    padding:15px;
}

.grid-item-4{
    padding:15px;
    width:380px;
    font-size: 15px;
    margin-right:100px;
}

.hea{
    font-size:17px;
    
}

.linkhref{
    text-decoration:none;
}

.colOne{
    list-style-type:none;
}

`;
    }


    static get properties() {
        return {
            
            arrayHeading: { type: Array },
            arrayUsefulLinks: {type : Array},
            title1 : {type : String},
            title2 : {type : String},
            title3 : {type : String},
            title4 : {type : String},
            para1 : {type : String},
            para2 : {type : String}

        };
    }


    constructor() {
        super();
        
        
        this.arrayHeading = ['Men','Women','Kids','Home & Living','Offers','Gift Cards'];
        this.arrayUsefulLinks = ['Contact Us','FAQS','T&C','Terms of Use', 'Track Order', 'Shipping'];
        this.title1 = "ONLINE SHOPPING";
        this.title2 = "USEFUL LINKS";
        this.title3 = "EXPERIENCE MYNTRA APP ON MOBILE";
        this.title4 = "GET YOUR SHOPPING GOING";
        this.para1 = "Visit Myntra and transform your closet with garments for every occasion. We bring you all the top brands at your fingertips, with the best discounts and a wide selection to pick from. So log in to Myntra today and get shopping on-the-go!";
        this.para2 = "Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.";
    }

    render() {
        return html`




<footer class="foot">

    <div class="grid-container">
        <div class="grid-item-1">

            <div class="colOne">
            ${this.title1 ? html` <h6 class="hea">${this.title1}</h6> ` : null}

            <br>

            
                <ul>${this.arrayHeading.map((item) => (html `<li><a href ="#">${item}</a></li>`)) }</ul>


                
            </div>

        </div> <!-- End of container 1 -->
        <div class="grid-item-2">

            <div class="colTwo">
            ${this.title2 ? html` <h6 class="hea">${this.title2}</h6> ` : null}
                
                <br>

                <ul>${this.arrayUsefulLinks.map((item) => (html `<li><a href ="#">${item}</a></li>`)) }</ul>


               
            </div>

        </div> <!-- End of container 2 -->
        <div class="grid-item-3">

            <div class="colThree">
            ${this.title3 ? html` <h6 class="hea">${this.title3}</h6> ` : null}
                <br>
                <br>
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/768px-Google_Play_Store_badge_EN.svg.png" style="height:40px;width:30%"></a>
                <a href="#"><img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" style="height:40px;width:30%; margin-left:25px"></a>
            </div>


        </div> <!-- End of container 3 -->
        <div class="grid-item-4">

            <div class="colFour">
            ${this.title4 ? html` <h6 class="hea">${this.title4}</h6> ` : null}
            <br>
            ${this.para1 ? html` <p class="para">${this.para1}</p> ` : null}

               <br>
            ${this.para2 ? html` <p class="para">${this.para2}</p> ` : null}

                
            </div>


        </div> <!-- End of container 4 -->
    </div> <!-- Grid container -->


   
</footer>




`;
    }
}
customElements.define("app-footer-new", AppFooterNew);
