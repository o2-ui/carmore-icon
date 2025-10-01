import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelParking from '.';

const meta: Meta<typeof HotelParking> = {
  title: 'ui/HotelParking',
  component: HotelParking,
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

type Story = StoryObj<typeof HotelParking>;

export const Preview: Story = {};
