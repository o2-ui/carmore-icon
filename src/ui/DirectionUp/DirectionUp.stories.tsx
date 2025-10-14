import type { Meta, StoryObj } from '@storybook/react-vite';

import DirectionUp from '.';

const meta: Meta<typeof DirectionUp> = {
  title: 'ui/DirectionUp',
  component: DirectionUp,
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

type Story = StoryObj<typeof DirectionUp>;

export const Preview: Story = {};
