import type { Meta, StoryObj } from '@storybook/react';
import { Showcase } from './Showcase';

const meta = {
  title: 'Main/Showcase',
  component: Showcase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Showcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}