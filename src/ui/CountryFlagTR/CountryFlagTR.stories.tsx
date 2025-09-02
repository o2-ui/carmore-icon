import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagTR from '.';

const meta: Meta<typeof CountryFlagTR> = {
  title: 'ui/CountryFlagTR',
  component: CountryFlagTR,
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

type Story = StoryObj<typeof CountryFlagTR>;

export const Preview: Story = {};
