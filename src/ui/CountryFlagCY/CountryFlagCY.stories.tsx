import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagCY from '.';

const meta: Meta<typeof CountryFlagCY> = {
  title: 'ui/CountryFlagCY',
  component: CountryFlagCY,
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

type Story = StoryObj<typeof CountryFlagCY>;

export const Preview: Story = {};
