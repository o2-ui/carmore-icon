import type { Meta, StoryObj } from '@storybook/react-vite';

import Solider from '.';

const meta: Meta<typeof Solider> = {
  title: 'ui/Solider',
  component: Solider,
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

type Story = StoryObj<typeof Solider>;

export const Preview: Story = {};
