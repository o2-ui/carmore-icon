import type { Meta, StoryObj } from '@storybook/react-vite';

import MoreInfo from '.';

const meta: Meta<typeof MoreInfo> = {
  title: 'ui/MoreInfo',
  component: MoreInfo,
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

type Story = StoryObj<typeof MoreInfo>;

export const Preview: Story = {};
