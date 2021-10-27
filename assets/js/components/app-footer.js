import { html, LitElement, css } from 'lit-element';
import "./app-footer-list.js";
import "./app-footer-experience.js";
import "./app-footer-shopping.js";
export default class AppFooter extends LitElement{

    static get styles() {
        return css`

*{
    margin:0;
    padding:0;
}
.foot{
    background: #f4f5f5;
    padding-left:65px;
}

.hea{
    font-size:17px;
    margin-top:18px;
    
}

.linkhref{
    text-decoration:none;
}

.colOne{
    list-style-type:none;
}

.span{
    padding:20px;
}

.span1{
    padding:20px;
}
.span2{
    padding:20px;
}


@media screen and (max-width: 1230px) {

.span2{
    display:none;
}
}

@media screen and (max-width: 570px) {

.span1{
    display:none;
}
}
`;
    }

static get properties(){
        return{
            compData : Object,
        };
}
    render(){
        return html `
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
      
      
        <footer class="foot">

        <app-grid>
<span class="span" >

    <app-footer-list .compData=${this.compData.first}></app-footer-list>
</span>


<span class="span" >

    <app-footer-list .compData=${this.compData.second}></app-footer-list>
</span>


<span class="span1" >
    <h6 class="hea">${this.compData.experience.mobile}</h6>
    
            <br>
    
           
    
            <app-footer-experience .compData=${this.compData.experience}></app-footer-experience>

    </span>


<span class="span2" style="width:360px">

    <h4 class="hea">${this.compData.shopping.ShopHeader}</h4>
    
            <br>
    
            <app-footer-shopping .compData=${this.compData.shopping}></app-footer-shopping>

</span>

</app-grid>

   
</footer>

      
      
      
      
      `
    }
}
customElements.define('app-footer', AppFooter);