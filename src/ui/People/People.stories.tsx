import type { Meta, StoryObj } from '@storybook/react-vite';

import People from '.';

const meta: Meta<typeof People> = {
  title: 'ui/People',
  component: People,
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

type Story = StoryObj<typeof People>;

export const Preview: Story = {};
