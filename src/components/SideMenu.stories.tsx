import type { Meta, StoryObj } from '@storybook/react';
import { SideMenu } from './SideMenu';

const meta = {
  title: 'Main/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primery: Story = {
    args: {
        callback: () => {}
    },
    decorators: [
        (Story) => <div className='w-[400px] h-[800px]'><Story /></div>
    ]
}