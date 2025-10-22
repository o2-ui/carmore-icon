import type { Meta, StoryObj } from '@storybook/react-vite';

import Time from '.';

const meta: Meta<typeof Time> = {
  title: 'ui/Time',
  component: Time,
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

type Story = StoryObj<typeof Time>;

export const Preview: Story = {};
