import type { Meta, StoryObj } from '@storybook/react-vite';

import Chat from '.';

const meta: Meta<typeof Chat> = {
  title: 'ui/Chat',
  component: Chat,
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

type Story = StoryObj<typeof Chat>;

export const Preview: Story = {};
