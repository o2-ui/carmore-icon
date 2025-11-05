import type { Meta, StoryObj } from '@storybook/react-vite';

import Location from '.';

const meta: Meta<typeof Location> = {
  title: 'ui/Location',
  component: Location,
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

type Story = StoryObj<typeof Location>;

export const Preview: Story = {};
