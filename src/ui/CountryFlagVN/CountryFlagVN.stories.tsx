import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagVN from '.';

const meta: Meta<typeof CountryFlagVN> = {
  title: 'ui/CountryFlagVN',
  component: CountryFlagVN,
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

type Story = StoryObj<typeof CountryFlagVN>;

export const Preview: Story = {};
