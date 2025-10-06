import type { Meta, StoryObj } from '@storybook/react-vite';

import InputDelete from '.';

const meta: Meta<typeof InputDelete> = {
  title: 'ui/InputDelete',
  component: InputDelete,
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

type Story = StoryObj<typeof InputDelete>;

export const Preview: Story = {};
