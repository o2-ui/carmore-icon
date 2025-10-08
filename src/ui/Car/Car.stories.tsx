import type { Meta, StoryObj } from '@storybook/react-vite';

import Car from '.';

const meta: Meta<typeof Car> = {
  title: 'ui/Car',
  component: Car,
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

type Story = StoryObj<typeof Car>;

export const Preview: Story = {};
