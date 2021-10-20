import { html } from "lit-element";
import '../assets/js/components/app-card';


export default {
  title: 'Components/Product',
};

const Product = ({product}) => html`<app-card .product=${product}></app-card>`;

const Template = (args) => Product(args);

export const Normal = Template.bind({});
Normal.args = { product: { 
img :["https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg"],


title : "Biba",
description : "Printed khadi dress",
offer : "Flat 50% off",
price : 2500,
actualprice : "₹3500",
actionLabel : "Shop Now",
actionLink : "#",
}
};

export const Contact = Template.bind({});
Contact.args = {product: {
  title : "Janish",
  description : "Men Regular Formal Shirts",
}
};
