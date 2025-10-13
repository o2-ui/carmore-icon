import type { Meta, StoryObj } from '@storybook/react-vite';

import Station from '.';

const meta: Meta<typeof Station> = {
  title: 'ui/Station',
  component: Station,
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

type Story = StoryObj<typeof Station>;

export const Preview: Story = {};
