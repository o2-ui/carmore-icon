import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagES from '.';

const meta: Meta<typeof CountryFlagES> = {
  title: 'ui/CountryFlagES',
  component: CountryFlagES,
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

type Story = StoryObj<typeof CountryFlagES>;

export const Preview: Story = {};
