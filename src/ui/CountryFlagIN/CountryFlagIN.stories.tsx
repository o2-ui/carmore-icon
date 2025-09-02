import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagIN from '.';

const meta: Meta<typeof CountryFlagIN> = {
  title: 'ui/CountryFlagIN',
  component: CountryFlagIN,
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

type Story = StoryObj<typeof CountryFlagIN>;

export const Preview: Story = {};
