import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagRS from '.';

const meta: Meta<typeof CountryFlagRS> = {
  title: 'ui/CountryFlagRS',
  component: CountryFlagRS,
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

type Story = StoryObj<typeof CountryFlagRS>;

export const Preview: Story = {};
