import type { Meta, StoryObj } from '@storybook/react-vite';

import TabAlert from '.';

const meta: Meta<typeof TabAlert> = {
  title: 'ui/TabAlert',
  component: TabAlert,
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

type Story = StoryObj<typeof TabAlert>;

export const Preview: Story = {};
