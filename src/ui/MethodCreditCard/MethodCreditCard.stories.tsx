import type { Meta, StoryObj } from '@storybook/react-vite';

import MethodCreditCard from '.';

const meta: Meta<typeof MethodCreditCard> = {
  title: 'ui/MethodCreditCard',
  component: MethodCreditCard,
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

type Story = StoryObj<typeof MethodCreditCard>;

export const Preview: Story = {};
