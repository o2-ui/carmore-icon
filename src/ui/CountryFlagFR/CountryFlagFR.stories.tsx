import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagFR from '.';

const meta: Meta<typeof CountryFlagFR> = {
  title: 'ui/CountryFlagFR',
  component: CountryFlagFR,
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

type Story = StoryObj<typeof CountryFlagFR>;

export const Preview: Story = {};
