import type { Meta, StoryObj } from '@storybook/react-vite';

import StepperPlus from '.';

const meta: Meta<typeof StepperPlus> = {
  title: 'ui/StepperPlus',
  component: StepperPlus,
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

type Story = StoryObj<typeof StepperPlus>;

export const Preview: Story = {};
