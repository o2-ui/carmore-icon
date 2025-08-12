import type { Meta, StoryObj } from '@storybook/react-vite';

import Cancel from '.';

const meta: Meta<typeof Cancel> = {
  title: 'ui/Cancel',
  component: Cancel,
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

type Story = StoryObj<typeof Cancel>;

export const Preview: Story = {};
