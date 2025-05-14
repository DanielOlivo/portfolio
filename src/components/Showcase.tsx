export const Showcase = () => {
  return (
    <div
        className='text-slate-200 font-spaceGrotesk' 
    >
        <h2 className='text-5xl font-medium'>Projects</h2>

        <h3
            className='text-xl font-medium mt-6' 
        >MessengerApp</h3>
        <div>
            <ul
            className='flex flex-row' 
            >
            <li><a 
                className='hover:text-blue-500'
                href='https://github.com/DanielOlivo/MessengerApp'>Github</a></li>
            <li className='ml-5'><a
                className='hover:text-blue-500' 
            >Demo</a></li>
            </ul>
        </div>
        <div>
        The simple messenger application for real-time communication.
    </div>
    <div>
        Made with: Typescript, Express, Socket.io, Vite
    </div>

    </div>
  )
}
