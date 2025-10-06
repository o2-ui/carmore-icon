import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelDining from '.';

const meta: Meta<typeof HotelDining> = {
  title: 'ui/HotelDining',
  component: HotelDining,
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

type Story = StoryObj<typeof HotelDining>;

export const Preview: Story = {};
