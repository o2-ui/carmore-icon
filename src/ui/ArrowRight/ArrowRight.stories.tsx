import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowRight from '.';

const meta: Meta<typeof ArrowRight> = {
  title: 'ui/ArrowRight',
  component: ArrowRight,
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

type Story = StoryObj<typeof ArrowRight>;

export const Preview: Story = {};
