import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagNO from '.';

const meta: Meta<typeof CountryFlagNO> = {
  title: 'ui/CountryFlagNO',
  component: CountryFlagNO,
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

type Story = StoryObj<typeof CountryFlagNO>;

export const Preview: Story = {};
