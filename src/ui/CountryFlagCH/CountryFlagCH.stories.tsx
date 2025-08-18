import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagCH from '.';

const meta: Meta<typeof CountryFlagCH> = {
  title: 'ui/CountryFlagCH',
  component: CountryFlagCH,
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

type Story = StoryObj<typeof CountryFlagCH>;

export const Preview: Story = {};
