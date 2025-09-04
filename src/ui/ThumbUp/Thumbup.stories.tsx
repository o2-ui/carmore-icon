import type { Meta, StoryObj } from '@storybook/react-vite';

import ThumbUp from '.';

const meta: Meta<typeof ThumbUp> = {
  title: 'ui/ThumbUp',
  component: ThumbUp,
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

type Story = StoryObj<typeof ThumbUp>;

export const Preview: Story = {};
