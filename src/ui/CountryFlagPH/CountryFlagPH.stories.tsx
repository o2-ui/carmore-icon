import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagPH from '.';

const meta: Meta<typeof CountryFlagPH> = {
  title: 'ui/CountryFlagPH',
  component: CountryFlagPH,
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

type Story = StoryObj<typeof CountryFlagPH>;

export const Preview: Story = {};
