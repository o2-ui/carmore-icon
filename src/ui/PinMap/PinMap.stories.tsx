import type { Meta, StoryObj } from '@storybook/react-vite';

import PinMap from '.';

const meta: Meta<typeof PinMap> = {
  title: 'ui/PinMap',
  component: PinMap,
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

type Story = StoryObj<typeof PinMap>;

export const Preview: Story = {};
