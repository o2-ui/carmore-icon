import type { Meta, StoryObj } from '@storybook/react-vite';

import Oneway from '.';

const meta: Meta<typeof Oneway> = {
  title: 'ui/Oneway',
  component: Oneway,
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

type Story = StoryObj<typeof Oneway>;

export const Preview: Story = {};
