import type { Meta, StoryObj } from '@storybook/react-vite';

import CopyLink from '.';

const meta: Meta<typeof CopyLink> = {
  title: 'ui/CopyLink',
  component: CopyLink,
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

type Story = StoryObj<typeof CopyLink>;

export const Preview: Story = {};
