import type { Meta, StoryObj } from '@storybook/react-vite';

import StarSingle from '.';

const meta: Meta<typeof StarSingle> = {
  title: 'ui/StarSingle',
  component: StarSingle,
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

type Story = StoryObj<typeof StarSingle>;

export const Preview: Story = {};
