import type { Meta, StoryObj } from '@storybook/react-vite';

import Point from '.';

const meta: Meta<typeof Point> = {
  title: 'ui/Point',
  component: Point,
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

type Story = StoryObj<typeof Point>;

export const Preview: Story = {};
