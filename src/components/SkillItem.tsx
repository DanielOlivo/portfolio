import { FC } from "react"

export interface SkillItemProps {
    title: string
    logo: string
    isBright?: boolean
}

export const SkillItem: FC<SkillItemProps> = ({title, logo, isBright = false}) => {
  return (
    <li 
        className="flex flex-row justify-start items-center my-2"
    >
        <div className="w-7 h-7">
            <img src={logo} className={`object-contain ${isBright ? 'brightness-200' : ''}`} />
        </div>
        <p 
            className={`ml-3 font-spaceGrotesk text-slate-200 font-semibold text-2xl `}
        >{title}</p>
    </li>
  )
}
