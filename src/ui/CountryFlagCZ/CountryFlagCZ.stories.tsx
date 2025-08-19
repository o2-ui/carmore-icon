import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagCZ from '.';

const meta: Meta<typeof CountryFlagCZ> = {
  title: 'ui/CountryFlagCZ',
  component: CountryFlagCZ,
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

type Story = StoryObj<typeof CountryFlagCZ>;

export const Preview: Story = {};
