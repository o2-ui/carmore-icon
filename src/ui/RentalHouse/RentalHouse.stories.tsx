import type { Meta, StoryObj } from '@storybook/react-vite';

import RentalHouse from '.';

const meta: Meta<typeof RentalHouse> = {
  title: 'ui/RentalHouse',
  component: RentalHouse,
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

type Story = StoryObj<typeof RentalHouse>;

export const Preview: Story = {};
