import type { Meta, StoryObj } from '@storybook/react-vite';

import List from '.';

const meta: Meta<typeof List> = {
  title: 'ui/List',
  component: List,
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

type Story = StoryObj<typeof List>;

export const Preview: Story = {};
