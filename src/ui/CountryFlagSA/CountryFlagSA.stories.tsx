import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagSA from '.';

const meta: Meta<typeof CountryFlagSA> = {
  title: 'ui/CountryFlagSA',
  component: CountryFlagSA,
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

type Story = StoryObj<typeof CountryFlagSA>;

export const Preview: Story = {};
