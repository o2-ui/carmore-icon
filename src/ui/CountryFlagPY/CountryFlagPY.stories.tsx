import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagPY from '.';

const meta: Meta<typeof CountryFlagPY> = {
  title: 'ui/CountryFlagPY',
  component: CountryFlagPY,
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

type Story = StoryObj<typeof CountryFlagPY>;

export const Preview: Story = {};
