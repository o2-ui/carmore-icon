import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelValet from '.';

const meta: Meta<typeof HotelValet> = {
  title: 'ui/HotelValet',
  component: HotelValet,
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

type Story = StoryObj<typeof HotelValet>;

export const Preview: Story = {};
