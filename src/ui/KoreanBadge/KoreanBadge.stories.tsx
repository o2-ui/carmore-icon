import type { Meta, StoryObj } from '@storybook/react-vite';

import KoreanBadge from '.';

const meta: Meta<typeof KoreanBadge> = {
  title: 'ui/KoreanBadge',
  component: KoreanBadge,
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

type Story = StoryObj<typeof KoreanBadge>;

export const Preview: Story = {};
