import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagIL from '.';

const meta: Meta<typeof CountryFlagIL> = {
  title: 'ui/CountryFlagIL',
  component: CountryFlagIL,
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

type Story = StoryObj<typeof CountryFlagIL>;

export const Preview: Story = {};
