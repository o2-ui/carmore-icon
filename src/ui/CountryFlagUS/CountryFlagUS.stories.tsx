import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagUS from '.';

const meta: Meta<typeof CountryFlagUS> = {
  title: 'ui/CountryFlagUS',
  component: CountryFlagUS,
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

type Story = StoryObj<typeof CountryFlagUS>;

export const Preview: Story = {};
