import type { Meta, StoryObj } from '@storybook/react-vite';

import Share from '.';

const meta: Meta<typeof Share> = {
  title: 'ui/Share',
  component: Share,
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

type Story = StoryObj<typeof Share>;

export const Preview: Story = {};
