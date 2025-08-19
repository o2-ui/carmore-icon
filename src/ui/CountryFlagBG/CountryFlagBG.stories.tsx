import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagBG from '.';

const meta: Meta<typeof CountryFlagBG> = {
  title: 'ui/CountryFlagBG',
  component: CountryFlagBG,
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

type Story = StoryObj<typeof CountryFlagBG>;

export const Preview: Story = {};
