import type { Meta, StoryObj } from '@storybook/react-vite';

import Bus from '.';

const meta: Meta<typeof Bus> = {
  title: 'ui/Bus',
  component: Bus,
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

type Story = StoryObj<typeof Bus>;

export const Preview: Story = {};
