import type { Meta, StoryObj } from '@storybook/react-vite';

import Close from '.';

const meta: Meta<typeof Close> = {
  title: 'ui/Close',
  component: Close,
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

type Story = StoryObj<typeof Close>;

export const Preview: Story = {};
