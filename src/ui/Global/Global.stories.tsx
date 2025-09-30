import type { Meta, StoryObj } from '@storybook/react-vite';

import Global from '.';

const meta: Meta<typeof Global> = {
  title: 'ui/Global',
  component: Global,
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

type Story = StoryObj<typeof Global>;

export const Preview: Story = {};
