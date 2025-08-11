import type { Meta, StoryObj } from '@storybook/react-vite';

import Nowhere from '.';

const meta: Meta<typeof Nowhere> = {
  title: 'ui/Nowhere',
  component: Nowhere,
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

type Story = StoryObj<typeof Nowhere>;

export const Preview: Story = {};
