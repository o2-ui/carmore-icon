import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagSI from '.';

const meta: Meta<typeof CountryFlagSI> = {
  title: 'ui/CountryFlagSI',
  component: CountryFlagSI,
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

type Story = StoryObj<typeof CountryFlagSI>;

export const Preview: Story = {};
