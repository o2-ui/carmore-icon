import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowDoubleUp from '.';

const meta: Meta<typeof ArrowDoubleUp> = {
  title: 'ui/ArrowDoubleUp',
  component: ArrowDoubleUp,
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

type Story = StoryObj<typeof ArrowDoubleUp>;

export const Preview: Story = {};
