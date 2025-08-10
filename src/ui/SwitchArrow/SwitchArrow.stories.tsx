import type { Meta, StoryObj } from '@storybook/react-vite';

import SwitchArrow from '.';

const meta: Meta<typeof SwitchArrow> = {
  title: 'ui/SwitchArrow',
  component: SwitchArrow,
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

type Story = StoryObj<typeof SwitchArrow>;

export const Preview: Story = {};
