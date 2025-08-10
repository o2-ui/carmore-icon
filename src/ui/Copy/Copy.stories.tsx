import type { Meta, StoryObj } from '@storybook/react-vite';

import Copy from '.';

const meta: Meta<typeof Copy> = {
  title: 'ui/Copy',
  component: Copy,
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

type Story = StoryObj<typeof Copy>;

export const Preview: Story = {};
