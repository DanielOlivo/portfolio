import type { Meta, StoryObj } from '@storybook/react';
import { Certificates } from './Certificates';

const meta = {
  title: 'Main/Certificates',
  component: Certificates,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Certificates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}