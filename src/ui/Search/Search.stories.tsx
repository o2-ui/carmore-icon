import type { Meta, StoryObj } from '@storybook/react-vite';

import Search from '.';

const meta: Meta<typeof Search> = {
  title: 'ui/Search',
  component: Search,
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

type Story = StoryObj<typeof Search>;

export const Preview: Story = {};
