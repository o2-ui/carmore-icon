import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagCA from '.';

const meta: Meta<typeof CountryFlagCA> = {
  title: 'ui/CountryFlagCA',
  component: CountryFlagCA,
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

type Story = StoryObj<typeof CountryFlagCA>;

export const Preview: Story = {};
