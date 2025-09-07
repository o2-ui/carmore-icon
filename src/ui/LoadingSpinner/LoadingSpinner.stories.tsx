import type { Meta, StoryObj } from '@storybook/react-vite';

import LoadingSpinner from '.';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'ui/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    spin: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Preview: Story = {};
