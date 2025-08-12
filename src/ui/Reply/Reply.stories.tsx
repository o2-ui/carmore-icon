import type { Meta, StoryObj } from '@storybook/react-vite';

import Reply from '.';

const meta: Meta<typeof Reply> = {
  title: 'ui/Reply',
  component: Reply,
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

type Story = StoryObj<typeof Reply>;

export const Preview: Story = {};
