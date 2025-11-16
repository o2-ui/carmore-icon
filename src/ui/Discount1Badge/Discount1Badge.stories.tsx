import type { Meta, StoryObj } from '@storybook/react-vite';

import Discount1Badge from '.';

const meta: Meta<typeof Discount1Badge> = {
  title: 'ui/Discount1Badge',
  component: Discount1Badge,
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

type Story = StoryObj<typeof Discount1Badge>;

export const Preview: Story = {};
