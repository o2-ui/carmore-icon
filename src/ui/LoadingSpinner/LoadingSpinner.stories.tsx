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
      description: '애니메이션 여부',
      table: {
        summary: {
          defaultValue: true,
        },
      },
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Preview: Story = {};
