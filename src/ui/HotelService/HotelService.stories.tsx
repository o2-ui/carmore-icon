import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelService from '.';

const meta: Meta<typeof HotelService> = {
  title: 'ui/HotelService',
  component: HotelService,
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

type Story = StoryObj<typeof HotelService>;

export const Preview: Story = {};
