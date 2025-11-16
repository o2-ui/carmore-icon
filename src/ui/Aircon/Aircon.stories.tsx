import type { Meta, StoryObj } from '@storybook/react-vite';

import Aircon from '.';

const meta: Meta<typeof Aircon> = {
  title: 'ui/Aircon',
  component: Aircon,
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

type Story = StoryObj<typeof Aircon>;

export const Preview: Story = {};
