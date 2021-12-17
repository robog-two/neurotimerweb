import React from 'react';

import { UpcomingTasks } from './UpcomingTasks';

export default {
  title: 'UI/General/UpcomingTasks',
  component: UpcomingTasks,
  argTypes: {
    dark: { control: 'boolean' }
  },
};

const Template = (args) => <UpcomingTasks {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  dark: true
};

export const Light = Template.bind({});
Light.args = {
  dark: false
};
