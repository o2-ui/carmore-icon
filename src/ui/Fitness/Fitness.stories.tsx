import type { Meta, StoryObj } from '@storybook/react-vite';

import Fitness from '.';

const meta: Meta<typeof Fitness> = {
  title: 'ui/Fitness',
  component: Fitness,
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

type Story = StoryObj<typeof Fitness>;

export const Preview: Story = {};
