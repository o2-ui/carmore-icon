import type { Meta, StoryObj } from '@storybook/react-vite';

import HotelActivity from '.';

const meta: Meta<typeof HotelActivity> = {
  title: 'ui/HotelActivity',
  component: HotelActivity,
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

type Story = StoryObj<typeof HotelActivity>;

export const Preview: Story = {};
