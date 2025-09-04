import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagEG from '.';

const meta: Meta<typeof CountryFlagEG> = {
  title: 'ui/CountryFlagEG',
  component: CountryFlagEG,
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

type Story = StoryObj<typeof CountryFlagEG>;

export const Preview: Story = {};
