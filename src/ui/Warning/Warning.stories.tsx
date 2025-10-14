import type { Meta, StoryObj } from '@storybook/react-vite';

import Warning from '.';

const meta: Meta<typeof Warning> = {
  title: 'ui/Warning',
  component: Warning,
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

type Story = StoryObj<typeof Warning>;

export const Preview: Story = {};
