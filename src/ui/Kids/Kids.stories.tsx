import type { Meta, StoryObj } from '@storybook/react-vite';

import Kids from '.';

const meta: Meta<typeof Kids> = {
  title: 'ui/Kids',
  component: Kids,
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

type Story = StoryObj<typeof Kids>;

export const Preview: Story = {};
