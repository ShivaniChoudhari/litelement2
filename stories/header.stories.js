import { html } from "lit-element";
import '../assets/js/components/app-header-new';


export default {
  title: 'Components/Header',
};

const Header = ({ navlogo, headingMen, headingWomen, headingKids, headingsHome, headingBeauty,headingOffers}) => html`<app-header-new .navlogo=${navlogo} .headingMen=${headingMen} .headingWomen=${headingWomen} .headingKids=${headingKids} .headingHome=${headingsHome} .headingBeauty=${headingBeauty} .headingOffers=${headingOffers}  ></app-header-new>`;

const Template = (args) => Header(args);

export const Normal = Template.bind({});
Normal.args = {
  

home : "Home",

navlogo : "https://www.gizbot.com/img/2015/05/11-1431326999-myntraimage1.jpg",
headingMen : "MEN",
headingWomen : "WOMEN",
headingKids : "KIDS",
headingHome : "HOME AND LIVING",
headingOffers : "ABOUT",
headingBeauty : "BEAUTY",


};