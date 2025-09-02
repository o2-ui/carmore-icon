import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagAR from '.';

const meta: Meta<typeof CountryFlagAR> = {
  title: 'ui/CountryFlagAR',
  component: CountryFlagAR,
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

type Story = StoryObj<typeof CountryFlagAR>;

export const Preview: Story = {};
