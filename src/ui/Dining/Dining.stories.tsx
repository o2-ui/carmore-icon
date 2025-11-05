import type { Meta, StoryObj } from '@storybook/react-vite';

import Dining from '.';

const meta: Meta<typeof Dining> = {
  title: 'ui/Dining',
  component: Dining,
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

type Story = StoryObj<typeof Dining>;

export const Preview: Story = {};
