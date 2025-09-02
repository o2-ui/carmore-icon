import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagZA from '.';

const meta: Meta<typeof CountryFlagZA> = {
  title: 'ui/CountryFlagZA',
  component: CountryFlagZA,
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

type Story = StoryObj<typeof CountryFlagZA>;

export const Preview: Story = {};
