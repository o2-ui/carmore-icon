import type { Meta, StoryObj } from '@storybook/react-vite';

import ETC from '.';

const meta: Meta<typeof ETC> = {
  title: 'ui/ETC',
  component: ETC,
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

type Story = StoryObj<typeof ETC>;

export const Preview: Story = {};
