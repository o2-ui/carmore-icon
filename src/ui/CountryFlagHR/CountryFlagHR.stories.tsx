import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagHR from '.';

const meta: Meta<typeof CountryFlagHR> = {
  title: 'ui/CountryFlagHR',
  component: CountryFlagHR,
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

type Story = StoryObj<typeof CountryFlagHR>;

export const Preview: Story = {};
