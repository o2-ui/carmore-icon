import type { Meta, StoryObj } from '@storybook/react-vite';

import Foreigner from '.';

const meta: Meta<typeof Foreigner> = {
  title: 'ui/Foreigner',
  component: Foreigner,
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
      options: ['on', 'off'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Foreigner>;

export const Preview: Story = {};
