import type { Meta, StoryObj } from '@storybook/react-vite';

import OutLink from '.';

const meta: Meta<typeof OutLink> = {
  title: 'ui/OutLink',
  component: OutLink,
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

type Story = StoryObj<typeof OutLink>;

export const Preview: Story = {};
