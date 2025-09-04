import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagLV from '.';

const meta: Meta<typeof CountryFlagLV> = {
  title: 'ui/CountryFlagLV',
  component: CountryFlagLV,
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

type Story = StoryObj<typeof CountryFlagLV>;

export const Preview: Story = {};
