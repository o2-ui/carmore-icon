import type { Meta, StoryObj } from '@storybook/react-vite';

import Refresh from '.';

const meta: Meta<typeof Refresh> = {
  title: 'ui/Refresh',
  component: Refresh,
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

type Story = StoryObj<typeof Refresh>;

export const Preview: Story = {};
