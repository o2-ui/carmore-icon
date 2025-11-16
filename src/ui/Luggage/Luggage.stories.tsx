import type { Meta, StoryObj } from '@storybook/react-vite';

import Luggage from '.';

const meta: Meta<typeof Luggage> = {
  title: 'ui/Luggage',
  component: Luggage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Luggage>;

export const Preview: Story = {};
