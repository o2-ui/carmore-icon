import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagAL from '.';

const meta: Meta<typeof CountryFlagAL> = {
  title: 'ui/CountryFlagAL',
  component: CountryFlagAL,
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

type Story = StoryObj<typeof CountryFlagAL>;

export const Preview: Story = {};
