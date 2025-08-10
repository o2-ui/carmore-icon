import type { Meta, StoryObj } from '@storybook/react-vite';

import StepperMinus from '.';

const meta: Meta<typeof StepperMinus> = {
  title: 'ui/StepperMinus',
  component: StepperMinus,
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

type Story = StoryObj<typeof StepperMinus>;

export const Preview: Story = {};
