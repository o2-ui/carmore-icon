import type { Meta, StoryObj } from '@storybook/react-vite';

import FavHome from '.';

const meta: Meta<typeof FavHome> = {
  title: 'ui/FavHome',
  component: FavHome,
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
      options: ['default', 'active'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FavHome>;

export const Preview: Story = {};
