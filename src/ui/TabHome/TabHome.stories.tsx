import type { Meta, StoryObj } from '@storybook/react-vite';

import TabHome from '.';

const meta: Meta<typeof TabHome> = {
  title: 'ui/TabHome',
  component: TabHome,
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

type Story = StoryObj<typeof TabHome>;

export const Preview: Story = {};
