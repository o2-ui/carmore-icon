import type { Meta, StoryObj } from '@storybook/react-vite';

import FavOffice from '.';

const meta: Meta<typeof FavOffice> = {
  title: 'ui/FavOffice',
  component: FavOffice,
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
      control: 'select',
      options: ['default', 'active'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FavOffice>;

export const Preview: Story = {};
