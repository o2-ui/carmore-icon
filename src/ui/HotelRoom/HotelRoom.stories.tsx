import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelRoom from '.';

const meta: Meta<typeof HotelRoom> = {
  title: 'ui/HotelRoom',
  component: HotelRoom,
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

type Story = StoryObj<typeof HotelRoom>;

export const Preview: Story = {};
