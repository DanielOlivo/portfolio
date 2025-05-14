import reactLogo from '../assets/reactLogo.svg'
import reduxLogo from '../assets/reduxLogo.svg'

import type { Meta, StoryObj } from '@storybook/react';
import { SkillItem } from './SkillItem';

const meta = {
  title: 'Main/SkillItem',
  component: SkillItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <div className='w-[300px] h-[200px] bg-slate-700 p-7'>
            <Story />
        </div>
    )
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SkillItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const React: Story = {
    args: {
        title: 'React',
        logo: reactLogo,
        
    }
}

export const Redux: Story = {
    args: {
        title: 'Redux',
        logo: reduxLogo,
        isBright: true
    }
}