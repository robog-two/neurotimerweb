import React from 'react';

import { HeaderSubheader } from './HeaderSubheader';

export default {
  title: 'UI/General/HeaderSubheader',
  component: HeaderSubheader,
  argTypes: {
    dark: { control: 'boolean' }
  },
};

const Template = (args) => <HeaderSubheader {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  dark: true
};

export const Light = Template.bind({});
Light.args = {
  dark: false
};
