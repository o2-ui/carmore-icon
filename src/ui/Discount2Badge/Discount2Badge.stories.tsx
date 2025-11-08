import type { Meta, StoryObj } from '@storybook/react-vite';

import Discount2Badge from '.';

const meta: Meta<typeof Discount2Badge> = {
  title: 'ui/Discount2Badge',
  component: Discount2Badge,
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

type Story = StoryObj<typeof Discount2Badge>;

export const Preview: Story = {};
