import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagJM from '.';

const meta: Meta<typeof CountryFlagJM> = {
  title: 'ui/CountryFlagJM',
  component: CountryFlagJM,
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

type Story = StoryObj<typeof CountryFlagJM>;

export const Preview: Story = {};
