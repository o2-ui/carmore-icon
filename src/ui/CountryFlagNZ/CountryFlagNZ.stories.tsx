import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagNZ from '.';

const meta: Meta<typeof CountryFlagNZ> = {
  title: 'ui/CountryFlagNZ',
  component: CountryFlagNZ,
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

type Story = StoryObj<typeof CountryFlagNZ>;

export const Preview: Story = {};
