import type { Meta, StoryObj } from '@storybook/react-vite';

import Filter from '.';

const meta: Meta<typeof Filter> = {
  title: 'ui/Filter',
  component: Filter,
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

type Story = StoryObj<typeof Filter>;

export const Preview: Story = {};
