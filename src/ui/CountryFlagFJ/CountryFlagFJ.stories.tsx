import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagFJ from '.';

const meta: Meta<typeof CountryFlagFJ> = {
  title: 'ui/CountryFlagFJ',
  component: CountryFlagFJ,
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

type Story = StoryObj<typeof CountryFlagFJ>;

export const Preview: Story = {};
