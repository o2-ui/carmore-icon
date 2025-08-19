import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagIE from '.';

const meta: Meta<typeof CountryFlagIE> = {
  title: 'ui/CountryFlagIE',
  component: CountryFlagIE,
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

type Story = StoryObj<typeof CountryFlagIE>;

export const Preview: Story = {};
