import React from 'react';

import ReactTrapButton from './ReactTrapButton';

export default {
  title: 'Atom/React-Trap/ReactButton',
  component: ReactTrapButton,
};

const Template = (args) => <ReactTrapButton {...args} />;

export const React_Trap_Button_Primary= Template.bind({});
React_Trap_Button_Primary.args = {
  label: "BUTTON",
  variant:"primary"
};
export const React_Trap_Button_Secondary= Template.bind({});
React_Trap_Button_Secondary.args = {
  label: "BUTTON",
  variant:"secondary"
};
export const React_Trap_Button_Success= Template.bind({});
React_Trap_Button_Success.args = {
  label: "BUTTON",
  variant:"success"
};
export const React_Trap_Button_Login= Template.bind({});
React_Trap_Button_Login.args = {
  label: "LOGIN",
  variant:"success",
  style:"LoginButton"
};
export const React_Trap_Button_Home_Login= Template.bind({});
React_Trap_Button_Home_Login.args = {
  label: "LOG IN",
  style:"HomeLoginButton"
};

