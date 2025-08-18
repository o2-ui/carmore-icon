import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagAT from '.';

const meta: Meta<typeof CountryFlagAT> = {
  title: 'ui/CountryFlagAT',
  component: CountryFlagAT,
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

type Story = StoryObj<typeof CountryFlagAT>;

export const Preview: Story = {};
