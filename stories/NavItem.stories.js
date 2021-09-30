import { html } from "lit-element";
import '../assets/js/components/app-nav-item';

export default {
  title: 'Components/NavItem',
};

const NavItem = ({ label, link }) => html`<app-nav-item label=${label} link=${link} ></app-nav-item>`;

const Template = (args) => NavItem(args);

export const Normal = Template.bind({});
Normal.args = {
  link: '#',
  label: 'Home',
};

export const Contact = Template.bind({});
Contact.args = {
  link: '#',
  label: 'Contact',
};
