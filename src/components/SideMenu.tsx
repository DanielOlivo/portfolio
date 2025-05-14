import { FC } from "react"

export interface SideMenuProps {
    callback: (id: string) => void
}

export const SideMenu: FC<SideMenuProps> = ({callback}) => {

    return (
        <div 
            className='h-full bg-slate-700 text-slate-200 font-spaceGrotesk 
            text-4xl font-medium
            flex flex-col justify-center items-center'
        >
            <ol>
                {['About', 'Skills', 'Certificates', 'Projects'].map(n => 
                    <li
                        className="mt-5" 
                    ><button onClick={(() => callback(n.toLowerCase()))}>{n}</button></li>
                )}
            </ol>
        </div>
    )
}
