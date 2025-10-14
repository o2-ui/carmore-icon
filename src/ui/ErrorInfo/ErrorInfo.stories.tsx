import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorInfo from '.';

const meta: Meta<typeof ErrorInfo> = {
  title: 'ui/ErrorInfo',
  component: ErrorInfo,
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

type Story = StoryObj<typeof ErrorInfo>;

export const Preview: Story = {};
