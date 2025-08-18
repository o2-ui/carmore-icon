import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagTW from '.';

const meta: Meta<typeof CountryFlagTW> = {
  title: 'ui/CountryFlagTW',
  component: CountryFlagTW,
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

type Story = StoryObj<typeof CountryFlagTW>;

export const Preview: Story = {};
