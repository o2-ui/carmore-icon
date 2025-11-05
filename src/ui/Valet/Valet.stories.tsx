import type { Meta, StoryObj } from '@storybook/react-vite';

import Valet from '.';

const meta: Meta<typeof Valet> = {
  title: 'ui/Valet',
  component: Valet,
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

type Story = StoryObj<typeof Valet>;

export const Preview: Story = {};
