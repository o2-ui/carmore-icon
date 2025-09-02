import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagCR from '.';

const meta: Meta<typeof CountryFlagCR> = {
  title: 'ui/CountryFlagCR',
  component: CountryFlagCR,
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

type Story = StoryObj<typeof CountryFlagCR>;

export const Preview: Story = {};
