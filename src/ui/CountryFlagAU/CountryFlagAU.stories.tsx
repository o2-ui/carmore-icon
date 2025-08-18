import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagAU from '.';

const meta: Meta<typeof CountryFlagAU> = {
  title: 'ui/CountryFlagAU',
  component: CountryFlagAU,
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

type Story = StoryObj<typeof CountryFlagAU>;

export const Preview: Story = {};
