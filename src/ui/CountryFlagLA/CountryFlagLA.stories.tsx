import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagLA from '.';

const meta: Meta<typeof CountryFlagLA> = {
  title: 'ui/CountryFlagLA',
  component: CountryFlagLA,
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

type Story = StoryObj<typeof CountryFlagLA>;

export const Preview: Story = {};
