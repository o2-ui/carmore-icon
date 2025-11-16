import type { Meta, StoryObj } from '@storybook/react-vite';

import Activity from '.';

const meta: Meta<typeof Activity> = {
  title: 'ui/Activity',
  component: Activity,
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

type Story = StoryObj<typeof Activity>;

export const Preview: Story = {};
