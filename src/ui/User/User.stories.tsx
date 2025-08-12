import type { Meta, StoryObj } from '@storybook/react-vite';

import User from '.';

const meta: Meta<typeof User> = {
  title: 'ui/User',
  component: User,
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

type Story = StoryObj<typeof User>;

export const Preview: Story = {};
