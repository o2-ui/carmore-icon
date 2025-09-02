import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagMY from '.';

const meta: Meta<typeof CountryFlagMY> = {
  title: 'ui/CountryFlagMY',
  component: CountryFlagMY,
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

type Story = StoryObj<typeof CountryFlagMY>;

export const Preview: Story = {};
