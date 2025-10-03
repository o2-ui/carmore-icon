import type { Meta, StoryObj } from '@storybook/react-vite';

import RoundTrip from '.';

const meta: Meta<typeof RoundTrip> = {
  title: 'ui/RoundTrip',
  component: RoundTrip,
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

type Story = StoryObj<typeof RoundTrip>;

export const Preview: Story = {};
