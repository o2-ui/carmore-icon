import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagLK from '.';

const meta: Meta<typeof CountryFlagLK> = {
  title: 'ui/CountryFlagLK',
  component: CountryFlagLK,
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

type Story = StoryObj<typeof CountryFlagLK>;

export const Preview: Story = {};
