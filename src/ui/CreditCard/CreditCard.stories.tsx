import type { Meta, StoryObj } from '@storybook/react-vite';

import CreditCard from '.';

const meta: Meta<typeof CreditCard> = {
  title: 'ui/CreditCard',
  component: CreditCard,
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

type Story = StoryObj<typeof CreditCard>;

export const Preview: Story = {};
