import type { Meta, StoryObj } from '@storybook/react-vite';

import Gear from '.';

const meta: Meta<typeof Gear> = {
  title: 'ui/Gear',
  component: Gear,
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

type Story = StoryObj<typeof Gear>;

export const Preview: Story = {};
