import React from 'react';

import Header from './Header';

export default {
  title: 'Atom/React-Trap/ReactButton',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Home_Page_Header = Template.bind({});
Home_Page_Header.args = {
  expand: "lg",
  variant: "light",
  bg: "dark",
  style:"HomeHeader",
  color:"Branch",
  title:"Strategies For English Certification Exams"
};



