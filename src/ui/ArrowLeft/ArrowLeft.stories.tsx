import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowLeft from '.';

const meta: Meta<typeof ArrowLeft> = {
  title: 'ui/ArrowLeft',
  component: ArrowLeft,
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
    thin: {
      control: 'boolean',
    },
    half: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArrowLeft>;

export const Preview: Story = {};
