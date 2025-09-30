import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelWifi from '.';

const meta: Meta<typeof HotelWifi> = {
  title: 'ui/HotelWifi',
  component: HotelWifi,
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

type Story = StoryObj<typeof HotelWifi>;

export const Preview: Story = {};
