import myPhoto from './assets/myphoto2-removebg-preview.png'
import otusCert from './assets/otus_cert.pdf'
import diCert from './assets/DI_certificate.pdf'

function App() {

  return (
    <div
      className="flex flex-col justify-start px-14 items-center" 
    >

      <section
          className="flex flex-row justify-around mt-10
          border-b-4 border-grey-100
          w-4/5 
          " 
      >
        <div
        >
          <h1
            className="font-extrabold text-4xl" 
          >Vitalii Masterov</h1>
          <h3
            className="font-semibold mt-3 text-2xl" 
          >Full-stack developer</h3>
        </div>
        <div
          className='w-28 h-auto' 
        >
          <img 
          className='' 
          src={myPhoto}/>
        </div>
      </section>

      <section
          className="flex flex-col justify-start mt-10
          border-b-4 border-grey-100
          w-4/5"
      >
        <h1
          className='text-3xl font-semibold' 
        >About me</h1>
        <p
          className='mt-3'
        >I'm a passionate and detail-oriented full-stack developer with a strong focus on writing clean, efficient code. Currently, I'm expanding my expertise in Python, JavaScript, and TypeScript to build robust applications. Always eager to learn new technologies.
        </p>
      </section>


      <section
          className="flex flex-row justify-around mt-10
          border-b-4 border-grey-100
          w-4/5"
      >
        <div>
          <h1
            className='text-2xl font-semibold' 
          >Skills</h1>
          <ul className='list-disc'>
            <li>Problem-solving & Analytical Thinking</li>
            <li>Attention to Detail</li>
          </ul>
        </div>

        <div
          className='ml-4'  
        >
          <h2
            className='text-2xl font-semibold' 
          >Proficient in:</h2>
          <ul className='list-disc'>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>Scala</li>
          </ul>
        </div>
      </section>

      <section
          className="flex flex-col justify-start mt-10
          border-b-4 border-grey-100
          w-4/5"
      >
        <h2
            className='text-2xl font-semibold' 
        >Certificates</h2>
        <ul>
          <li><a href={diCert}>Developers Institute: Full-Stack Developer</a></li>
          <li><a href={otusCert}>Otus: Scala developer</a></li>
        </ul>
      </section>

      <section
          className="flex flex-col items-start justify-between mt-10
          border-b-4 border-grey-100
          w-4/5"
      >
        <h2
            className='text-2xl font-semibold' 
        >Links</h2>
        <div>
          <ul>
            <li><a
              href="https://github.com/DanielOlivo"
              className='hover:text-blue-500' 
            >Github</a></li>
            <li><a
              href='https://www.linkedin.com/in/vitalii-masterov-412533233/'
              className='hover:text-blue-500' 
            >Linkedin</a></li>
          </ul>
        </div>
      </section>

      <section
          className="flex flex-col items-start justify-between mt-10
          border-b-4 border-grey-100
          w-4/5"
      >
        <h2
            className='text-2xl font-semibold' 
        >Showcase projects: </h2>

        <div
          className='mt-3' 
        >
          <h3
            className='text-xl font-medium' 
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
          <div
            className='text-gray-600' 
          >
            The simple messenger application for real-time communication.
          </div>
          <div
            className='text-gray-600' 
          >
            Made with: Typescript, Express, Socket.io, Vite
          </div>
        </div>
      </section>

      <section></section>

    </div>
  )
}

export default App

// A profile picture

// A small bio about yourself and what job you are looking for (it’s like an “about me” section where people can learn about you). It could also be a funny bio.

// Your strongest skills and the coding languages you know.

// Your education or certificates, and make sure to show that the skills you learned are relevant to web development and the jobs you desire.

// Links to your Github and Linkedin profile.

// A button to download your resume.

// Projects showcasing your work.

// A contact form.
