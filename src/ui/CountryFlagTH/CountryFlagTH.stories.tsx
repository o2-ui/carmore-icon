import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagTH from '.';

const meta: Meta<typeof CountryFlagTH> = {
  title: 'ui/CountryFlagTH',
  component: CountryFlagTH,
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

type Story = StoryObj<typeof CountryFlagTH>;

export const Preview: Story = {};
