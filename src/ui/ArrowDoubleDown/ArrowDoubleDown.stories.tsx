import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowDoubleDown from '.';

const meta: Meta<typeof ArrowDoubleDown> = {
  title: 'ui/ArrowDoubleDown',
  component: ArrowDoubleDown,
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

type Story = StoryObj<typeof ArrowDoubleDown>;

export const Preview: Story = {};
