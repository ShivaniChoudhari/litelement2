import { html } from "lit-element";

import '../../assets/js/components/app-header-resp';


export default {
  title: 'Components/Header/Responsive',
};

const Header = ({ navlogo, headingMen, headingWomen, headingKids, headingsHome, headingBeauty,headingOffers}) => html`<app-header-resp .navlogo=${navlogo} .headingMen=${headingMen} .headingWomen=${headingWomen} .headingKids=${headingKids} .headingHome=${headingsHome} .headingBeauty=${headingBeauty} .headingOffers=${headingOffers}  ></app-header-resp>`;

const Template = (args) => Header(args);

export const Resp = Template.bind({});
Resp.args = {
  

home : "Home",

navlogo : "https://www.gizbot.com/img/2015/05/11-1431326999-myntraimage1.jpg",
headingMen : "MEN",
headingWomen : "WOMEN",
headingKids : "KIDS",
headingHome : "HOME AND LIVING",
headingOffers : "ABOUT",
headingBeauty : "BEAUTY",


};

