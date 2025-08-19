import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagGR from '.';

const meta: Meta<typeof CountryFlagGR> = {
  title: 'ui/CountryFlagGR',
  component: CountryFlagGR,
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

type Story = StoryObj<typeof CountryFlagGR>;

export const Preview: Story = {};
