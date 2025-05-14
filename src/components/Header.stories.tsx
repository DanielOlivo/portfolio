import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        (Story) => <div className='w-[500px] h-8'><Story /></div>
    ]
}