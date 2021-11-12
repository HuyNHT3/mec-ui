import React from 'react';
import VdcLogo from './VdcLogo';
export default {
  title: 'Atom/React-Trap/Image',
  component: VdcLogo,
};

const Template = (args) => <VdcLogo {...args} />;

export const Feature_VdcLogo= Template.bind({});
Feature_VdcLogo.args = {
  imagePath:"VdcFeatureLogo",
};
export const Home_VdcLogo= Template.bind({});
Home_VdcLogo.args = {
  imagePath:"VdcHomeLogo",
};



