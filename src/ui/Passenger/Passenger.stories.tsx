import type { Meta, StoryObj } from '@storybook/react-vite';

import Passenger from '.';

const meta: Meta<typeof Passenger> = {
  title: 'ui/Passenger',
  component: Passenger,
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

type Story = StoryObj<typeof Passenger>;

export const Preview: Story = {};
