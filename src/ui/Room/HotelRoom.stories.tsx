import type { Meta, StoryObj } from '@storybook/react-vite';

import Room from '.';

const meta: Meta<typeof Room> = {
  title: 'ui/Room',
  component: Room,
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

type Story = StoryObj<typeof Room>;

export const Preview: Story = {};
