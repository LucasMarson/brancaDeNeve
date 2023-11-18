import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../public/Logo.png'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setMenuOpen(false)
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full items-center bg-bege-100 fixed shadow-md">
      <div className="flex px-4 md:px-14 py-4 w-full justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            width={120}
            height={120}
            alt="Logo Carol Pansani Ballet"
          />
        </Link>
        <div className="md:flex hidden items-center space-x-6 font-semibold">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/atos" onClick={closeMenu}>
            Programação do Evento
          </Link>
          <a
            onClick={() => scrollToSection('section4')} // Adicione o clique para rolar até a seção "Sobre nós"
            style={{ cursor: 'pointer' }}
          >
            Sobre nós
          </a>
          <a
            onClick={() => scrollToSection('section5')} // Adicione o clique para rolar até a seção "Patrocinadores"
            style={{ cursor: 'pointer' }}
          >
            Patrocinadores
          </a>
          <Link
            type="button"
            target="_blank"
            className="bg-esmeralda-800 p-3 rounded-md text-white hover:bg-esmeralda-800/80 transition duration-300 ease-in-out"
            href="https://wa.me/5519982640644"
            onClick={closeMenu}
          >
            Matricule-se
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-esmeralda-800 p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/atos" onClick={closeMenu}>
              Programação do Evento
            </Link>
            <a
              onClick={() => scrollToSection('section4')} // Adicione o clique para rolar até a seção "Sobre nós"
              style={{ cursor: 'pointer' }}
            >
              Sobre nós
            </a>
            <a
              onClick={() => scrollToSection('section5')} // Adicione o clique para rolar até a seção "Patrocinadores"
              style={{ cursor: 'pointer' }}
            >
              Patrocinadores
            </a>
            <Link
              type="button"
              target="_blank"
              className="bg-esmeralda-800 p-3 rounded-md text-white hover:bg-esmeralda-800/80 transition duration-300 ease-in-out"
              href="https://web.whatsapp.com"
              onClick={closeMenu}
            >
              Matricule-se
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
