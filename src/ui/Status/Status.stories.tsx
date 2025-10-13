import type { Meta, StoryObj } from '@storybook/react-vite';

import Status from '.';

const meta: Meta<typeof Status> = {
  title: 'ui/Status',
  component: Status,
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

type Story = StoryObj<typeof Status>;

export const Preview: Story = {};
