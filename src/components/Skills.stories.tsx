import type { Meta, StoryObj } from '@storybook/react';
import { Skills } from './Skills';

const meta = {
  title: 'Main/Skills',
  component: Skills,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => <div className='w-[600px] h-[600px]'><Story /></div>
  ]
}