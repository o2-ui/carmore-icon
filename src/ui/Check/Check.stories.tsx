import type { Meta, StoryObj } from '@storybook/react-vite';

import Check from '.';

const meta: Meta<typeof Check> = {
  title: 'ui/Check',
  component: Check,
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

type Story = StoryObj<typeof Check>;

export const Preview: Story = {};
