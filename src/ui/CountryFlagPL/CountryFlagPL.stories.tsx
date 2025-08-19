import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagPL from '.';

const meta: Meta<typeof CountryFlagPL> = {
  title: 'ui/CountryFlagPL',
  component: CountryFlagPL,
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

type Story = StoryObj<typeof CountryFlagPL>;

export const Preview: Story = {};
