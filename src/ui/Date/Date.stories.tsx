import type { Meta, StoryObj } from '@storybook/react-vite';

import Date from '.';

const meta: Meta<typeof Date> = {
  title: 'ui/Date',
  component: Date,
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

type Story = StoryObj<typeof Date>;

export const Preview: Story = {};
