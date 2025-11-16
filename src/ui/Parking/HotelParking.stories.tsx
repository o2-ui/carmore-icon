import type { Meta, StoryObj } from '@storybook/react-vite';

import Parking from '.';

const meta: Meta<typeof Parking> = {
  title: 'ui/Parking',
  component: Parking,
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

type Story = StoryObj<typeof Parking>;

export const Preview: Story = {};
