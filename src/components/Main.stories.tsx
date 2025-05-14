import type { Meta, StoryObj } from '@storybook/react';
import { Main } from './Main';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/Main',
  component: Main,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        (Story) => <div className='w-[700px] h-[700px]'><Story /></div>
    ]
}