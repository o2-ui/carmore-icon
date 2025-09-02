import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagLT from '.';

const meta: Meta<typeof CountryFlagLT> = {
  title: 'ui/CountryFlagLT',
  component: CountryFlagLT,
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

type Story = StoryObj<typeof CountryFlagLT>;

export const Preview: Story = {};
