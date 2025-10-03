import type { Meta, StoryObj } from '@storybook/react-vite';

import ListInactive from '.';

const meta: Meta<typeof ListInactive> = {
  title: 'ui/ListInactive',
  component: ListInactive,
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

type Story = StoryObj<typeof ListInactive>;

export const Preview: Story = {};
