import type { Meta, StoryObj } from '@storybook/react-vite';

import Walk from '.';

const meta: Meta<typeof Walk> = {
  title: 'ui/Walk',
  component: Walk,
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

type Story = StoryObj<typeof Walk>;

export const Preview: Story = {};
