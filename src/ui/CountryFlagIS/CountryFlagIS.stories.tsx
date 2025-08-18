import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagIS from '.';

const meta: Meta<typeof CountryFlagIS> = {
  title: 'ui/CountryFlagIS',
  component: CountryFlagIS,
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

type Story = StoryObj<typeof CountryFlagIS>;

export const Preview: Story = {};
