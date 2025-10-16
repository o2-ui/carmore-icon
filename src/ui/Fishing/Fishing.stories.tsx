import type { Meta, StoryObj } from '@storybook/react-vite';

import Fishing from '.';

const meta: Meta<typeof Fishing> = {
  title: 'ui/Fishing',
  component: Fishing,
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
    state: {
      control: 'radio',
      options: ['on', 'off'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Fishing>;

export const Preview: Story = {};
