import type { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta = {
  title: 'Main/App',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}