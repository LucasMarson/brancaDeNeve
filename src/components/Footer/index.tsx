import { Patrocinadores } from '@/db/patrocinadores'
import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import Logo from '../../../public/Logo.png'

export default function Footer() {
  return (
    <div className="bg-purple-1000 py-6">
      <div className="px-4 md:px-14 grid grid-cols-1 md:grid-cols-4 gap-4 md:justify-left items-start text-white">
        <div className="text-center md:text-left">
          <Image src={Logo} alt="Logo" width={120} height={120} />
          <div className="mt-2">
            <Link
              href="https://www.instagram.com/carolpansaniballet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size="20" />
            </Link>
          </div>
        </div>
        <div className="md:text-left">
          <h4 className="text-lg font-semibold mb-2">Sessões</h4>
          <div className="flex flex-col gap-3">
            <Link href="/">Sobre nós</Link>
            <Link href="/">Patrocinadores</Link>
            <Link
              type="button"
              target="_blank"
              className="bg-esmeralda-800 p-3 rounded-md text-white hover:bg-esmeralda-800/80 transition duration-300 ease-in-out w-1/2"
              href="https://web.whatsapp.com"
            >
              Matricule-se
            </Link>
          </div>
        </div>
        <div className="md:text-left">
          <h4 className="text-lg font-semibold mb-2">Contatos</h4>
          <ul className="text-sm gap-2 flex flex-col">
            <div className="flex flex-col">
              <span className="font-semibold text-base">Email:</span>
              <Link type="mail" href="mailto:carolpansaniballet@gmail.com">
                carolpansaniballet@gmail.com
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base">Telefone:</span>
              <Link
                href="https://wa.me/5519982640644"
                type="button"
                target="_blank"
                className="font-normal"
              >
                (19) 98264-0644
              </Link>
            </div>
          </ul>
        </div>
        <div className="md:text-left">
          <h4 className="text-lg font-semibold mb-2">Localização</h4>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.654625436478!2d-46.90602004333441!3d-22.74107504662916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea5c9867bb1%3A0x4d005b529ae901b9!2sCarol%20Pansani%20Ballet!5e0!3m2!1spt-BR!2sbr!4v1699793585478!5m2!1spt-BR!2sbr"
            height="300"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
      <div className="md:text-left px-4 md:px-14 mt-10">
        <div className="bg-white p-4 rounded-md">
          <h4 className="text-lg font-semibold mb-2 text-black">
            Patrocinadores
          </h4>
          <div className="flex flex-wrap gap-2">
            {Patrocinadores.map((patrocinador, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={patrocinador.url}
                  alt={patrocinador.alt}
                  width={70}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
