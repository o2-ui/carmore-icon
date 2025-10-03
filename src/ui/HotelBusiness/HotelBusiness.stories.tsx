import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelBusiness from '.';

const meta: Meta<typeof HotelBusiness> = {
  title: 'ui/HotelBusiness',
  component: HotelBusiness,
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

type Story = StoryObj<typeof HotelBusiness>;

export const Preview: Story = {};
