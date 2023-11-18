import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Patrocinador from '@/components/Patrocinador'
import Image from 'next/image'
import Link from 'next/link'
import BrancaDeNeve from '../../public/BrancaDeNeve.png'
import Maça from '../../public/Maça.png'
import Escrita from '../../public/escrita.png'

export default function Home() {
  return (
    <>
      <div className="bg-purple-1000 min-h-screen">
        <div className="fixed top-0 w-full">
          <Header />
        </div>
        <div>
          <div
            id="section1"
            className="px-4 md:px-14 bg-[url('../../public/fumaca.png')] bg-cover w-full h-screen flex items-center justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full mt-4 md:mt-20">
              <Image src={Escrita} height={1000} width={1000} alt="" />
              <Image src={BrancaDeNeve} height={800} width={900} alt="" />
            </div>
          </div>

          <div className="w-full h-screen bg-bege-100 text-purple-1000">
            <div
              id="section2"
              className="px-4 md:px-14 grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full mt-4 md:mt-0"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Detalhes dos Eventos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Teatro</h3>
                    <span className="flex gap-1">
                      <span>Data:</span> 18/11/2023
                    </span>
                    <span className="flex gap-1">
                      <span>Horário:</span> 19h30 às 20h30
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-semibold">Ginásio Santa Sofia</h3>
                    <span className="flex gap-1">
                      <span>Data:</span> 24/11/2023
                    </span>
                    <span className="flex gap-1">
                      <span>Horário:</span> 19h30 às 20h30
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-esmeralda-800 p-4 md:p-8 flex flex-col text-center rounded-3xl top-10 mt-4 md:mt-0">
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-center space-x-2 md:space-x-4">
                    <Image
                      src={Maça}
                      alt="Ícone"
                      height={8}
                      width={8}
                      className="w-8 h-8"
                    />
                    <h2 className="font-semibold text-2xl md:text-3xl text-orange-100">
                      Apresentação do Evento
                    </h2>
                  </div>
                  <div className="px-4 md:px-14">
                    <span className="text-base md:text-lg text-bege-100 leading-6">
                      Venha se encantar com o nosso espetáculo de balé inspirado
                      na adorada história da Branca de Neve. Nossos talentosos
                      bailarinos trarão essa história mágica à vida no palco,
                      com coreografias incríveis e figurinos deslumbrantes.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="section3"
              className="p-4 py-0 md:p-8 flex flex-col gap-4 md:gap-8 items-center mt-10"
            >
              <h2 className="font-semibold text-2xl md:text-3xl">
                Sinopse do Espetáculo
              </h2>
              <span className="text-base md:text-xl text-center font-normal">
                Prepare-se para mergulhar na história da Branca de Neve e os
                Sete Anões de uma maneira totalmente nova. Nossa adaptação de
                balé destaca os momentos mais icônicos, da maçã envenenada ao
                encontro com os anões na floresta encantada.
              </span>

              <Link
                href="/atos"
                className="bg-esmeralda-800 p-3 rounded-lg text-white font-semibold text-base "
              >
                Programação do Evento
              </Link>
            </div>
          </div>

          <div id="section4" className="bg-esmeralda-800 py-14 w-full">
            <div className="px-4 md:px-8 flex flex-col gap-4 md:gap-8 justify-center items-center">
              <h3 className="font-semibold text-white text-2xl md:text-3xl">
                Sobre Nossa Escola
              </h3>
              <div className="w-full text-bege-100">
                <p>
                  A Escola de Ballet Encantamento é dedicada a inspirar e nutrir
                  o talento artístico de nossos alunos. Nossos professores
                  altamente qualificados estão comprometidos em proporcionar uma
                  educação excepcional em dança.
                </p>
              </div>
              <Link
                href="#"
                className="bg-bege-100 p-2 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out"
              >
                Matricule-se aqui!
              </Link>
            </div>
          </div>
          <Patrocinador />
          <Footer />
        </div>
      </div>
    </>
  )
}
