import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagKW from '.';

const meta: Meta<typeof CountryFlagKW> = {
  title: 'ui/CountryFlagKW',
  component: CountryFlagKW,
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

type Story = StoryObj<typeof CountryFlagKW>;

export const Preview: Story = {};
