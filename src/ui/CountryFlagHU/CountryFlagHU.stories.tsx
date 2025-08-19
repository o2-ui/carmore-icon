import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagHU from '.';

const meta: Meta<typeof CountryFlagHU> = {
  title: 'ui/CountryFlagHU',
  component: CountryFlagHU,
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

type Story = StoryObj<typeof CountryFlagHU>;

export const Preview: Story = {};
