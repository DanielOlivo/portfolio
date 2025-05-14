import jsLogo from '../assets/javascriptLogo.svg'
import tsLogo from '../assets/typescriptLogo.svg'
import pythonLogo from '../assets/pythonLogo.svg'
import nodeLogo from '../assets/nodejsLogo.svg'
import expressLogo from '../assets/expressLogo.svg'
import socketLogo from '../assets/socketIOLogo.svg'
import scalaLogo from '../assets/scalaLogo.svg'

import postmanLogo from '../assets/postmanLogo.svg'
import postgresLogo from '../assets/postgresLogo.svg'
import mongoLogo from '../assets/mongoLogo.svg'


import reactLogo from '../assets/reactLogo.svg'
import reduxLogo from  '../assets/reduxLogo.svg'
import tailwindLogo from '../assets/tailwindLogo.svg'
import storybookLogo from '../assets/storybookLogo.svg'
import viteLogo from '../assets/viteLogo.svg'
import vitestLogo from '../assets/vitestLogo.svg'
import testingLibLogo from '../assets/testingLigLogo.svg'
import mswLogo from '../assets/mswLogo.svg'

import { SkillItem, SkillItemProps } from './SkillItem'

const backend: SkillItemProps[] = [
    {title: 'Javascript', logo: jsLogo, isBright: false},
    {title: 'Typescript', logo: tsLogo, isBright: false},
    {title: 'Python', logo: pythonLogo, isBright: false},
    {title: 'NodeJs', logo: nodeLogo, isBright: true},
    {title: 'Express', logo: expressLogo, isBright: true},
    {title: 'Socket.IO', logo: socketLogo, isBright: true},
    {title: 'Scala', logo: scalaLogo, isBright: false},

]

const other: SkillItemProps[] = [
    {title: 'Postman', logo: postmanLogo, isBright: false},
    {title: 'PostgreSQL', logo: postgresLogo, isBright: false},
    {title: 'MongoDB', logo: mongoLogo, isBright: false},

]

const skills: SkillItemProps[] = [
    {title: 'React', logo: reactLogo, isBright: false},
    {title: 'Redux', logo: reduxLogo, isBright: true},
    {title: 'TailwindCSS', logo: tailwindLogo, isBright: false},
    {title: 'Storybook', logo: storybookLogo, isBright: false},
    {title: 'Vite', logo: viteLogo, isBright: false},
    {title: 'Vitest', logo: vitestLogo, isBright: false},
    {title: 'testing-library', logo: testingLibLogo, isBright: true},
    {title: 'msw', logo: mswLogo, isBright: false},

]

export const Skills = () => {
  return (
    <div
        id='skills' 
        className="bg-slate-700 text-slate-200 font-spaceGrotesk
        p-4 
        "
    >
        <h1 className='text-6xl text-bold'>Skills</h1>
        <h2 className="mt-5 text-3xl font-medium">Backend</h2>
            <ol className="grid grid-cols-3 gap-2 ml-3">
                {backend.map(s => <SkillItem {...s} /> )}
            </ol>

            <div className='grid grid-cols-3 gap-2 mt-6'>
                {other.map(s => <SkillItem {...s} />)}
            </div>
        <h2 className="text-3xl font-medium mt-6">Frontend</h2>
            <div className="grid grid-cols-3 gap-2 ml-3">
                {skills.map(s => <SkillItem {...s} />)}
            </div>
    </div>
  )
}
