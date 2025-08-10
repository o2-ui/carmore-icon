import type { Meta, StoryObj } from '@storybook/react-vite';

import BackBtn from '.';

const meta: Meta<typeof BackBtn> = {
  title: 'ui/BackBtn',
  component: BackBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackBtn>;

export const Preview: Story = {};
