import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelETC from '.';

const meta: Meta<typeof HotelETC> = {
  title: 'ui/HotelETC',
  component: HotelETC,
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

type Story = StoryObj<typeof HotelETC>;

export const Preview: Story = {};
