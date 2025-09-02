import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagMU from '.';

const meta: Meta<typeof CountryFlagMU> = {
  title: 'ui/CountryFlagMU',
  component: CountryFlagMU,
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

type Story = StoryObj<typeof CountryFlagMU>;

export const Preview: Story = {};
