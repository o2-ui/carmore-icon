import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagPA from '.';

const meta: Meta<typeof CountryFlagPA> = {
  title: 'ui/CountryFlagPA',
  component: CountryFlagPA,
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

type Story = StoryObj<typeof CountryFlagPA>;

export const Preview: Story = {};
