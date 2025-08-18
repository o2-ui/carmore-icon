import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagJP from '.';

const meta: Meta<typeof CountryFlagJP> = {
  title: 'ui/CountryFlagJP',
  component: CountryFlagJP,
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

type Story = StoryObj<typeof CountryFlagJP>;

export const Preview: Story = {};
