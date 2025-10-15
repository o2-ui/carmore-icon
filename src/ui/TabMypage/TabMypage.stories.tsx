import type { Meta, StoryObj } from '@storybook/react-vite';

import TabMypage from '.';

const meta: Meta<typeof TabMypage> = {
  title: 'ui/TabMypage',
  component: TabMypage,
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
      control: 'select',
      options: ['default', 'active'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabMypage>;

export const Preview: Story = {};
