import type { Meta, StoryObj } from '@storybook/react-vite';

import CS from '.';

const meta: Meta<typeof CS> = {
  title: 'ui/CS',
  component: CS,
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

type Story = StoryObj<typeof CS>;

export const Preview: Story = {};
