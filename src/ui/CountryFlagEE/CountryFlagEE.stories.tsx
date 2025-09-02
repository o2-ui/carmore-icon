import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagEE from '.';

const meta: Meta<typeof CountryFlagEE> = {
  title: 'ui/CountryFlagEE',
  component: CountryFlagEE,
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

type Story = StoryObj<typeof CountryFlagEE>;

export const Preview: Story = {};
