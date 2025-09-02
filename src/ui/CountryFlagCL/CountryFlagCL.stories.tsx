import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagCL from '.';

const meta: Meta<typeof CountryFlagCL> = {
  title: 'ui/CountryFlagCL',
  component: CountryFlagCL,
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

type Story = StoryObj<typeof CountryFlagCL>;

export const Preview: Story = {};
