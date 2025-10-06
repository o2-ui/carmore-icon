import type { Meta, StoryObj } from '@storybook/react-vite';

import ListDot from '.';

const meta: Meta<typeof ListDot> = {
  title: 'ui/ListDot',
  component: ListDot,
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

type Story = StoryObj<typeof ListDot>;

export const Preview: Story = {};
