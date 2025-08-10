import type { Meta, StoryObj } from '@storybook/react-vite';

import Download from '.';

const meta: Meta<typeof Download> = {
  title: 'ui/Download',
  component: Download,
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

type Story = StoryObj<typeof Download>;

export const Preview: Story = {};
