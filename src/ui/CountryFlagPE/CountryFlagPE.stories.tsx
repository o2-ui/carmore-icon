import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagPE from '.';

const meta: Meta<typeof CountryFlagPE> = {
  title: 'ui/CountryFlagPE',
  component: CountryFlagPE,
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

type Story = StoryObj<typeof CountryFlagPE>;

export const Preview: Story = {};
