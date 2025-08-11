import type { Meta, StoryObj } from '@storybook/react-vite';

import Setting from '.';

const meta: Meta<typeof Setting> = {
  title: 'ui/Setting',
  component: Setting,
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

type Story = StoryObj<typeof Setting>;

export const Preview: Story = {};
