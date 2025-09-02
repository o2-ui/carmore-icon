import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagAE from '.';

const meta: Meta<typeof CountryFlagAE> = {
  title: 'ui/CountryFlagAE',
  component: CountryFlagAE,
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

type Story = StoryObj<typeof CountryFlagAE>;

export const Preview: Story = {};
