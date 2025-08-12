import type { Meta, StoryObj } from '@storybook/react-vite';

import ArrowUp from '.';

const meta: Meta<typeof ArrowUp> = {
  title: 'ui/ArrowUp',
  component: ArrowUp,
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

type Story = StoryObj<typeof ArrowUp>;

export const Preview: Story = {};
