import type { Meta, StoryObj } from '@storybook/react-vite';

import Fuel from '.';

const meta: Meta<typeof Fuel> = {
  title: 'ui/Fuel',
  component: Fuel,
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

type Story = StoryObj<typeof Fuel>;

export const Preview: Story = {};
