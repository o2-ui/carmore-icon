import type { Meta, StoryObj } from '@storybook/react-vite';

import Help from '.';

const meta: Meta<typeof Help> = {
  title: 'ui/Help',
  component: Help,
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

type Story = StoryObj<typeof Help>;

export const Preview: Story = {};
