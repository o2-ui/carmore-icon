import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelFitness from '.';

const meta: Meta<typeof HotelFitness> = {
  title: 'ui/HotelFitness',
  component: HotelFitness,
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

type Story = StoryObj<typeof HotelFitness>;

export const Preview: Story = {};
