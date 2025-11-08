import type { Meta, StoryObj } from '@storybook/react-vite';

import InstrumentPanel from '.';

const meta: Meta<typeof InstrumentPanel> = {
  title: 'ui/InstrumentPanel',
  component: InstrumentPanel,
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

type Story = StoryObj<typeof InstrumentPanel>;

export const Preview: Story = {};
