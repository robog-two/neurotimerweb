import React from 'react';

import { Card } from './Card';

export default {
  title: 'UI/General/Card',
  component: Card,
  argTypes: {
    dark: { control: 'boolean' }
  },
};

const Template = (args) => <Card {...args} />;

const loremIpsum = 'Numquam voluptas veniam sit quis adipisci in quae adipisci. Corrupti sit aut repudiandae qui quis quaerat omnis. Ut occaecati nostrum similique ipsa deserunt consequatur autem. Repellendus molestiae cupiditate corporis ut et amet sit. Tenetur eaque voluptatibus dolor nam non odit quidem officia.';

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  children: loremIpsum
};

export const Light = Template.bind({});
Light.args = {
  dark: false,
  children: loremIpsum
};
