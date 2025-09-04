import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagRO from '.';

const meta: Meta<typeof CountryFlagRO> = {
  title: 'ui/CountryFlagRO',
  component: CountryFlagRO,
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

type Story = StoryObj<typeof CountryFlagRO>;

export const Preview: Story = {};
