import type { Meta, StoryObj } from '@storybook/react-vite';

import Success from '.';

const meta: Meta<typeof Success> = {
  title: 'ui/Success',
  component: Success,
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

type Story = StoryObj<typeof Success>;

export const Preview: Story = {};
