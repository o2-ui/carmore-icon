import type { Meta, StoryObj } from '@storybook/react-vite';

import Facilities from '.';

const meta: Meta<typeof Facilities> = {
  title: 'ui/Facilities',
  component: Facilities,
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

type Story = StoryObj<typeof Facilities>;

export const Preview: Story = {};
