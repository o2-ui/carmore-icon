import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagEC from '.';

const meta: Meta<typeof CountryFlagEC> = {
  title: 'ui/CountryFlagEC',
  component: CountryFlagEC,
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

type Story = StoryObj<typeof CountryFlagEC>;

export const Preview: Story = {};
