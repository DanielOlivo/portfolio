import { Header } from './components/Header'
import otusCert from './assets/otus_cert.pdf'
import diCert from './assets/DI_certificate.pdf'
import { SideMenu } from './components/SideMenu'
import { Main } from './components/Main'
import { Skills } from './components/Skills'
import { Certificates } from './components/Certificates'
import { Showcase } from './components/Showcase'

function App() {

  const handleScroll = (id: string): void => {
    const el = document.getElementById(id)
    if(el){
      el.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div className='flex flex-col bg-slate-700 no-scrollbar'>

      <div className='w-full fixed top-0 left-0 z-50'>
        <Header />
      </div>

      <div
        className="flex flex-row justify-start px-14 items-center h-full w-full mt-4" 
      >

        <SideMenu callback={handleScroll} />

        <main className='h-screen overflow-y-scroll no-scrollbar'>

          <div className='flex flex-col pl-4'>

            <section
                id='about'
                className="flex flex-col justify-center
                w-4/5 h-screen
                " 
            >
              <Main />
            </section>

            <section
                className="flex flex-col justify-center 
                w-4/5 h-screen"
                id='skills'
            >
              <Skills />
            </section>

            <section
                className="flex flex-col justify-center mt-10
                w-4/5 h-screen"
                id='certificates'
            >
              <Certificates />
            </section>


            <section
                className="flex flex-col items-start justify-center mt-80
                border-b-4 border-grey-100
                w-4/5 h-screen"
                id='projects'
            >
              <Showcase />
            </section>

            <section></section>
          </div>
        </main>

      </div>
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
