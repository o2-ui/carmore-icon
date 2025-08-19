import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagFI from '.';

const meta: Meta<typeof CountryFlagFI> = {
  title: 'ui/CountryFlagFI',
  component: CountryFlagFI,
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

type Story = StoryObj<typeof CountryFlagFI>;

export const Preview: Story = {};
