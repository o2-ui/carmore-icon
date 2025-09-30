import type { Meta, StoryObj } from '@storybook/react-vite';

import Month from '.';

const meta: Meta<typeof Month> = {
  title: 'ui/Month',
  component: Month,
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

type Story = StoryObj<typeof Month>;

export const Preview: Story = {};
