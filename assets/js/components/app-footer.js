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

.span{
    padding:20px;
}





@media screen and (max-width: 1060px) {

.grid-item-3{
    width:250px;
}
.grid-item-4{
    margin-right:0px;
}

}

@media screen and (max-width: 990px) {

.grid-container{
    padding:0px;
}
.grid-item-3{
    width:200px;
    
}
.grid-item-4{
    width:280px;
    margin-right:0px;
    
}
}

@media screen and (max-width: 896px) {
.grid-container{
    grid-template-columns: auto auto; 

}
}


@media screen and (max-width: 570px) {

.grid-container{
grid-template-columns: auto;
padding:0;
}

.grid-item-3 {
display:none;


.grid-item-4{
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


<span class="span" >
    <h6 class="hea">${this.compData.experience.mobile}</h6>
    
            <br>
    
           
    
            <app-footer-experience .compData=${this.compData.experience}></app-footer-experience>

    </span>


<span class="span" style="width:360px">

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