import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagGB from '.';

const meta: Meta<typeof CountryFlagGB> = {
  title: 'ui/CountryFlagGB',
  component: CountryFlagGB,
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

type Story = StoryObj<typeof CountryFlagGB>;

export const Preview: Story = {};
