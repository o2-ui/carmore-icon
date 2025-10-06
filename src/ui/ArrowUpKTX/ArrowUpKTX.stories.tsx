import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowUpKTX from '.';

const meta: Meta<typeof ArrowUpKTX> = {
  title: 'ui/ArrowUpKTX',
  component: ArrowUpKTX,
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

type Story = StoryObj<typeof ArrowUpKTX>;

export const Preview: Story = {};
