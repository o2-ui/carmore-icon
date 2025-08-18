import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagDE from '.';

const meta: Meta<typeof CountryFlagDE> = {
  title: 'ui/CountryFlagDE',
  component: CountryFlagDE,
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

type Story = StoryObj<typeof CountryFlagDE>;

export const Preview: Story = {};
