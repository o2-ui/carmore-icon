import type { Meta, StoryObj } from '@storybook/react-vite';

import Distance from '.';

const meta: Meta<typeof Distance> = {
  title: 'ui/Distance',
  component: Distance,
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

type Story = StoryObj<typeof Distance>;

export const Preview: Story = {};
