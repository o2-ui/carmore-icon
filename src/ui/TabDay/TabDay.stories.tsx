import type { Meta, StoryObj } from '@storybook/react-vite';

import TabDay from '.';

const meta: Meta<typeof TabDay> = {
  title: 'ui/TabDay',
  component: TabDay,
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

type Story = StoryObj<typeof TabDay>;

export const Preview: Story = {};
