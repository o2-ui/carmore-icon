import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagBE from '.';

const meta: Meta<typeof CountryFlagBE> = {
  title: 'ui/CountryFlagBE',
  component: CountryFlagBE,
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

type Story = StoryObj<typeof CountryFlagBE>;

export const Preview: Story = {};
