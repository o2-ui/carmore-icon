import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagMT from '.';

const meta: Meta<typeof CountryFlagMT> = {
  title: 'ui/CountryFlagMT',
  component: CountryFlagMT,
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

type Story = StoryObj<typeof CountryFlagMT>;

export const Preview: Story = {};
