import type { Meta, StoryObj } from '@storybook/react-vite';

import CountryFlagDO from '.';

const meta: Meta<typeof CountryFlagDO> = {
  title: 'ui/CountryFlagDO',
  component: CountryFlagDO,
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

type Story = StoryObj<typeof CountryFlagDO>;

export const Preview: Story = {};
