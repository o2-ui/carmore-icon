import type { Meta, StoryObj } from '@storybook/react-vite';

import Ulleongdo from '.';

const meta: Meta<typeof Ulleongdo> = {
  title: 'ui/Ulleongdo',
  component: Ulleongdo,
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

type Story = StoryObj<typeof Ulleongdo>;

export const Preview: Story = {};
