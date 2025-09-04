import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagJO from '.';

const meta: Meta<typeof CountryFlagJO> = {
  title: 'ui/CountryFlagJO',
  component: CountryFlagJO,
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

type Story = StoryObj<typeof CountryFlagJO>;

export const Preview: Story = {};
