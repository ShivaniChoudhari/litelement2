import { html } from "lit-element";
import '../assets/js/components/app-footer-new';



export default {
  title: 'Components/Footer',
};

const Footer = ({ arrayHeading, arrayUsefulLinks, title1, title2, title3, title4, para1, para2}) => html`<app-footer-new  .arrayHeading=${arrayHeading} .arrayUsefulLinks=${arrayUsefulLinks} .title1=${title1} .title2=${title2} .title3=${title3} .title4=${title4}   ></app-footer-new>`;

const Template = (args) => Footer(args);

export const Normal = Template.bind({});
Normal.args = {
  
arrayHeading : ['Men','Women','Kids','Home & Living','Offers','Gift Cards'],
arrayUsefulLinks : ['Contact Us','FAQS','T&C','Terms of Use', 'Track Order', 'Shipping'],
title1 : "ONLINE SHOPPING",
        title2 : "USEFUL LINKS",
        title3 : "EXPERIENCE MYNTRA APP ON MOBILE",
        title4 : "GET YOUR SHOPPING GOING",
        para1 : "Visit Myntra and transform your closet with garments for every occasion. We bring you all the top brands at your fingertips, with the best discounts and a wide selection to pick from. So log in to Myntra today and get shopping on-the-go!",
        para2 : "Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions."



};


// export const Contact = Template.bind({});
// Contact.args = {
//   title : "Janish",
//   description : "Men Regular Formal Shirts",
// };
