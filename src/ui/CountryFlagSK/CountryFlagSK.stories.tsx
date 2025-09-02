import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagSK from '.';

const meta: Meta<typeof CountryFlagSK> = {
  title: 'ui/CountryFlagSK',
  component: CountryFlagSK,
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

type Story = StoryObj<typeof CountryFlagSK>;

export const Preview: Story = {};
