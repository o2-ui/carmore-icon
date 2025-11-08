import type { Meta, StoryObj } from '@storybook/react-vite';

import Door from '.';

const meta: Meta<typeof Door> = {
  title: 'ui/Door',
  component: Door,
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

type Story = StoryObj<typeof Door>;

export const Preview: Story = {};
