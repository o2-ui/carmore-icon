import type { Meta, StoryObj } from '@storybook/react-vite';

import TabHotel from '.';

const meta: Meta<typeof TabHotel> = {
  title: 'ui/TabHotel',
  component: TabHotel,
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
    state: {
      control: 'radio',
      options: ['default', 'active'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabHotel>;

export const Preview: Story = {};
