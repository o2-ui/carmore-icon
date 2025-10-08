import type { Meta, StoryObj } from '@storybook/react-vite';

import Airport from '.';

const meta: Meta<typeof Airport> = {
  title: 'ui/Airport',
  component: Airport,
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

type Story = StoryObj<typeof Airport>;

export const Preview: Story = {};
