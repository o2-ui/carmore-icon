import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagIT from '.';

const meta: Meta<typeof CountryFlagIT> = {
  title: 'ui/CountryFlagIT',
  component: CountryFlagIT,
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

type Story = StoryObj<typeof CountryFlagIT>;

export const Preview: Story = {};
