import type { Meta, StoryObj } from '@storybook/react-vite';

import Call from '.';

const meta: Meta<typeof Call> = {
  title: 'ui/Call',
  component: Call,
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

type Story = StoryObj<typeof Call>;

export const Preview: Story = {};
