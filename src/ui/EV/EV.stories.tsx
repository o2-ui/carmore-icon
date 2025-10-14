import type { Meta, StoryObj } from '@storybook/react-vite';

import EV from '.';

const meta: Meta<typeof EV> = {
  title: 'ui/EV',
  component: EV,
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

type Story = StoryObj<typeof EV>;

export const Preview: Story = {};
