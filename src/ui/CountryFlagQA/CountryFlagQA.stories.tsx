import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagQA from '.';

const meta: Meta<typeof CountryFlagQA> = {
  title: 'ui/CountryFlagQA',
  component: CountryFlagQA,
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

type Story = StoryObj<typeof CountryFlagQA>;

export const Preview: Story = {};
