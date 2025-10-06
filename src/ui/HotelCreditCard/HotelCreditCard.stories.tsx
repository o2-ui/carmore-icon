import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelCreditCard from '.';

const meta: Meta<typeof HotelCreditCard> = {
  title: 'ui/HotelCreditCard',
  component: HotelCreditCard,
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

type Story = StoryObj<typeof HotelCreditCard>;

export const Preview: Story = {};
