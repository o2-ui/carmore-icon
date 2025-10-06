import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelKids from '.';

const meta: Meta<typeof HotelKids> = {
  title: 'ui/HotelKids',
  component: HotelKids,
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

type Story = StoryObj<typeof HotelKids>;

export const Preview: Story = {};
