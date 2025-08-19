import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagDK from '.';

const meta: Meta<typeof CountryFlagDK> = {
  title: 'ui/CountryFlagDK',
  component: CountryFlagDK,
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

type Story = StoryObj<typeof CountryFlagDK>;

export const Preview: Story = {};
