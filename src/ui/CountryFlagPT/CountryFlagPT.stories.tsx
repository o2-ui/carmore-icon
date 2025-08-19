import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagPT from '.';

const meta: Meta<typeof CountryFlagPT> = {
  title: 'ui/CountryFlagPT',
  component: CountryFlagPT,
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

type Story = StoryObj<typeof CountryFlagPT>;

export const Preview: Story = {};
