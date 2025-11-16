import type { Meta, StoryObj } from '@storybook/react-vite';

import Business from '.';

const meta: Meta<typeof Business> = {
  title: 'ui/Business',
  component: Business,
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

type Story = StoryObj<typeof Business>;

export const Preview: Story = {};
