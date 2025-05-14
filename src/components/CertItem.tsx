import { FC } from "react"

export interface CertItemProps {
    title: string
    link: string
}

export const CertItem: FC<CertItemProps> = ({title, link}) => {
  return (
    <a 
        href={link}
        className="font-spaceGrotesk text-1xl hover:border-b-2 transition-all duration-200"
    >{title}</a>
  )
}
