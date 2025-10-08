import type { Meta, StoryObj } from '@storybook/react-vite';

import Anchor from '.';

const meta: Meta<typeof Anchor> = {
  title: 'ui/Anchor',
  component: Anchor,
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

type Story = StoryObj<typeof Anchor>;

export const Preview: Story = {};
