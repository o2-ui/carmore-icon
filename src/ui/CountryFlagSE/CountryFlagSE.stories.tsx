import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagSE from '.';

const meta: Meta<typeof CountryFlagSE> = {
  title: 'ui/CountryFlagSE',
  component: CountryFlagSE,
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

type Story = StoryObj<typeof CountryFlagSE>;

export const Preview: Story = {};
