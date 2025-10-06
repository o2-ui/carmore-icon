import type { Meta, StoryObj } from '@storybook/react-vite';

import Jeju from '.';

const meta: Meta<typeof Jeju> = {
  title: 'ui/Jeju',
  component: Jeju,
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

type Story = StoryObj<typeof Jeju>;

export const Preview: Story = {};
