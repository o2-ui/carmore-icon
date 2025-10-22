import type { Meta, StoryObj } from '@storybook/react-vite';

import Checklist from '.';

const meta: Meta<typeof Checklist> = {
  title: 'ui/Checklist',
  component: Checklist,
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

type Story = StoryObj<typeof Checklist>;

export const Preview: Story = {};
