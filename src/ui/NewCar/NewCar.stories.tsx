import type { Meta, StoryObj } from '@storybook/react-vite';

import NewCar from '.';

const meta: Meta<typeof NewCar> = {
  title: 'ui/NewCar',
  component: NewCar,
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

type Story = StoryObj<typeof NewCar>;

export const Preview: Story = {};
