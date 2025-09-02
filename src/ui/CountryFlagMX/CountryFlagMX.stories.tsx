import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagMX from '.';

const meta: Meta<typeof CountryFlagMX> = {
  title: 'ui/CountryFlagMX',
  component: CountryFlagMX,
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

type Story = StoryObj<typeof CountryFlagMX>;

export const Preview: Story = {};
