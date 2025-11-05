import type { Meta, StoryObj } from '@storybook/react-vite';

import Birth from '.';

const meta: Meta<typeof Birth> = {
  title: 'ui/Birth',
  component: Birth,
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

type Story = StoryObj<typeof Birth>;

export const Preview: Story = {};
