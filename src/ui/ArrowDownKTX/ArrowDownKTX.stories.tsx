import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowDownKTX from '.';

const meta: Meta<typeof ArrowDownKTX> = {
  title: 'ui/ArrowDownKTX',
  component: ArrowDownKTX,
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

type Story = StoryObj<typeof ArrowDownKTX>;

export const Preview: Story = {};
