import type { Meta, StoryObj } from '@storybook/react-vite';

import Like from '.';

const meta: Meta<typeof Like> = {
  title: 'ui/Like',
  component: Like,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variants: {
      control: 'select',
      options: ['fill', 'solid', 'active'],
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

type Story = StoryObj<typeof Like>;

export const Preview: Story = {};
