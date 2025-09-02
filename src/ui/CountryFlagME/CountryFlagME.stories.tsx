import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagME from '.';

const meta: Meta<typeof CountryFlagME> = {
  title: 'ui/CountryFlagME',
  component: CountryFlagME,
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

type Story = StoryObj<typeof CountryFlagME>;

export const Preview: Story = {};
