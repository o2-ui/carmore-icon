import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowDown from '.';

const meta: Meta<typeof ArrowDown> = {
  title: 'ui/ArrowDown',
  component: ArrowDown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    thin: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArrowDown>;

export const Preview: Story = {};
