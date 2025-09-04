import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagMA from '.';

const meta: Meta<typeof CountryFlagMA> = {
  title: 'ui/CountryFlagMA',
  component: CountryFlagMA,
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

type Story = StoryObj<typeof CountryFlagMA>;

export const Preview: Story = {};
