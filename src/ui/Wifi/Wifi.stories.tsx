import type { Meta, StoryObj } from '@storybook/react-vite';

import Wifi from '.';

const meta: Meta<typeof Wifi> = {
  title: 'ui/Wifi',
  component: Wifi,
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

type Story = StoryObj<typeof Wifi>;

export const Preview: Story = {};
