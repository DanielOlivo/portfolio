import otusCert from '../assets/otus_cert.pdf'
import diCert from '../assets/DI_certificate.pdf'
import { CertItem, CertItemProps } from './CertItem'

const certs: CertItemProps[] = [
    {title: 'Developers Institute: Full-Stack Developer', link: diCert},
    {title: 'Scala developer', link: otusCert}
]

export const Certificates = () => {
  return (
    <div className='font-spaceGrotesk text-slate-200'>
        <h2 className='text-5xl font-medium'>Certificates</h2>
        <ul className='mt-4'>
            {certs.map(c => <li><CertItem {...c} /></li> )} 
            {/* <li className='mb-2'><a href={diCert}>Developers Institute: Full-Stack Developer</a></li>
            <li><a href={otusCert}>Otus: Scala developer</a></li> */}
        </ul>
    </div>
  )
}
