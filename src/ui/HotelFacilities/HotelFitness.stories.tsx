import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelFacilities from '.';

const meta: Meta<typeof HotelFacilities> = {
  title: 'ui/HotelFacilities',
  component: HotelFacilities,
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

type Story = StoryObj<typeof HotelFacilities>;

export const Preview: Story = {};
