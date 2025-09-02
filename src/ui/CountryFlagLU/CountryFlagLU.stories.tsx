import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagLU from '.';

const meta: Meta<typeof CountryFlagLU> = {
  title: 'ui/CountryFlagLU',
  component: CountryFlagLU,
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

type Story = StoryObj<typeof CountryFlagLU>;

export const Preview: Story = {};
