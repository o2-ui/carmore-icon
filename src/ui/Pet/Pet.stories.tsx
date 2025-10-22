import type { Meta, StoryObj } from '@storybook/react-vite';

import Pet from '.';

const meta: Meta<typeof Pet> = {
  title: 'ui/Pet',
  component: Pet,
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

type Story = StoryObj<typeof Pet>;

export const Preview: Story = {};
