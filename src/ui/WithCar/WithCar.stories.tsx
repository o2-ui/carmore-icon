import type { Meta, StoryObj } from '@storybook/react-vite';

import WithCar from '.';

const meta: Meta<typeof WithCar> = {
  title: 'ui/WithCar',
  component: WithCar,
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

type Story = StoryObj<typeof WithCar>;

export const Preview: Story = {};
