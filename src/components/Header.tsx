import githubLogoWhite from '../assets/GitHub_Logo_White.png'
import inLogo from '../assets/LI-Logo.png'

const email = 'vit.masterov@gmail.com'

export const Header = () => {


  return (
        <div className='flex flex-row justify-end items-center w-full h-8 bg-slate-700 text-slate-200 font-spaceGrotesk'>
            <ul className='flex flex-row justify-end'>
                <li><a href={`mailto:${email}`} className='text-xl'>{email}</a></li>
                <li className='ml-6'>
                    <a href="http://github.com/DanielOlivo" className=''>
                        <img 
                            src={githubLogoWhite} 
                            className='h-7 '
                            // style={{filter: 'drop-shadow(0 0 1px white)'}}
                        />
                    </a>
                </li>
                <li className='ml-6'>
                    <a href="https://www.linkedin.com/in/vitalii-masterov-412533233">
                        <img 
                            src={inLogo} 
                            className='h-7 brightness-200' 
                        />
                    </a>
                </li>
            </ul> 
        </div>
  )
}
