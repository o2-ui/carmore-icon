import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagNL from '.';

const meta: Meta<typeof CountryFlagNL> = {
  title: 'ui/CountryFlagNL',
  component: CountryFlagNL,
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

type Story = StoryObj<typeof CountryFlagNL>;

export const Preview: Story = {};
