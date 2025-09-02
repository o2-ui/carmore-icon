import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagSG from '.';

const meta: Meta<typeof CountryFlagSG> = {
  title: 'ui/CountryFlagSG',
  component: CountryFlagSG,
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

type Story = StoryObj<typeof CountryFlagSG>;

export const Preview: Story = {};
