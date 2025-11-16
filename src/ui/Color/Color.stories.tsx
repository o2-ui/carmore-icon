import type { Meta, StoryObj } from '@storybook/react-vite';

import Color from '.';

const meta: Meta<typeof Color> = {
  title: 'ui/Color',
  component: Color,
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

type Story = StoryObj<typeof Color>;

export const Preview: Story = {};
