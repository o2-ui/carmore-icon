import type { Meta, StoryObj } from '@storybook/react-vite';

import Edit from '.';

const meta: Meta<typeof Edit> = {
  title: 'ui/Edit',
  component: Edit,
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

type Story = StoryObj<typeof Edit>;

export const Preview: Story = {};
