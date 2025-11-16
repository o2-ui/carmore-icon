import type { Meta, StoryObj } from '@storybook/react-vite';

import VehicleYear from '.';

const meta: Meta<typeof VehicleYear> = {
  title: 'ui/VehicleYear',
  component: VehicleYear,
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

type Story = StoryObj<typeof VehicleYear>;

export const Preview: Story = {};
