import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagGE from '.';

const meta: Meta<typeof CountryFlagGE> = {
  title: 'ui/CountryFlagGE',
  component: CountryFlagGE,
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

type Story = StoryObj<typeof CountryFlagGE>;

export const Preview: Story = {};
