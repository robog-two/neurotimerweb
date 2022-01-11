import React from 'react';

import { TimerPage } from './TimerPage';

export default {
  title: 'UI/PageMockups/TimerPage',
  component: TimerPage,
};

const Template = (args) => <TimerPage {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};

export const Light = Template.bind({});
Light.args = {
  dark: false,
};
