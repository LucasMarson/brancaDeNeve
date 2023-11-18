import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  coreografiasPrimeiroAto,
  coreografiasSegundoAto,
} from '@/db/coreografias'

export default function Atos() {
  return (
    <div>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="container mx-auto mt-28 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-bold text-gray-700 uppercase">
            Branca de Neve Ballet
          </h1>
          <h2 className="font-bold text-lg uppercase">Elenco Principal</h2>
          <div className="flex flex-col items-center gap-3 md:gap-1">
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <h4 className="font-semibold text-base uppercase">
                Branca de Neve:
              </h4>
              <span>Manuella Rossi </span>
            </div>
            <div className="flex md:gap-2 items-center flex-col md:flex-row">
              <h4 className="font-semibold text-base uppercase">Rainha Má:</h4>
              <span>Vitória de Giuseppe ou Ana Carolina Pansani </span>
            </div>
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <h4 className="font-semibold text-base uppercase">Príncepe:</h4>
              <span>Raoni Xavier</span>
            </div>
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <h4 className="font-semibold text-base uppercase">Caçador:</h4>
              <span>Amílcar Toledo </span>
            </div>
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <h4 className="font-semibold text-base uppercase">Espelho:</h4>
              <span>Fábio Miranda </span>
            </div>
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <h4 className="font-semibold text-base uppercase">Bruxa:</h4>
              <span>Richardson Clara </span>
            </div>
            <div className="flex gap-2 md:items-start flex-col items-center md:flex-row md:max-w-[650px]">
              <h4 className="font-semibold text-base uppercase whitespace-nowrap ">
                Sete Anões:
              </h4>
              <span className="px-4 md:px-0">
                Alice Baldasso Mattos, Laura Emboaba de Lima Oliveira, Lorenza
                de Faria Fidalgo, Manuella Pesse de Paula Ferreira, Sofia Tiemi
                Matsuo, Valentina Vieira Barrilado Valverde e Laura Francisca
                Ferreira da Silva{' '}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center uppercase">
            <h2 className="text-3xl font-bold text-esmeralda-800">I Ato</h2>
            <span className="text-gray-600">Coreografias</span>
          </div>
          <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {coreografiasPrimeiroAto.map((coreografia, index) => (
              <Cards
                key={index}
                nome={coreografia.nome}
                elenco={coreografia.dancarinos}
                coreografo={coreografia.coreografo}
                assistente={coreografia.assistente}
                ensaista={coreografia.ensaista}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <span className="bg-esmeralda-800 p-3 text-white rounded-md text-lg">
              Intervalo 15 minutos
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center uppercase">
            <h2 className="text-3xl font-bold text-esmeralda-800">II Ato</h2>
            <span className="text-gray-600">Coreografias</span>
          </div>
          <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreografiasSegundoAto.map((coreografia, index) => (
              <Cards
                key={index}
                nome={coreografia.nome}
                elenco={coreografia.dancarinos}
                coreografo={coreografia.coreografo}
                convidadoEspecial={coreografia.convidadoEspecial}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center px-4 md:px-0">
          <h2 className="text-xl font-bold">FICHA TÉCNICA</h2>
          <p>
            <strong>Direção Geral e Coreográfica:</strong> Ana Carolina Pansani
            :: <strong>Orientação de Expressão Corporal:</strong> Fabio Vitor
            Miranda e Richardson Clara ::{' '}
            <strong>Coordenação de Produção:</strong> Silmara de Godoi ::
            <strong> Figurinos:</strong> Fabio Vitor Miranda ::{' '}
            <strong>Cenografia:</strong> Ludi Sports,Fabio Vitor Miranda,
            Silmara de Godoi e Mudde Vintage Design ::{' '}
            <strong>Costureira:</strong> Heloize Nunes | Atêlie Ponto | Gilcelia
            Paz :: <strong>Fotografia e Filmagem:</strong> Anderson Lira ::
            <strong> Iluminação:</strong> Junior Cilotti::{' '}
            <strong> Sonoplasta e Editor de Áudio:</strong> Junior Cilotti ::
            <strong> Coordenação Cabine Tecnica:</strong> Amanda Berenschot ::
            <strong> Website:</strong> Lucas Marson | LM Solution ::
            <strong> Patrocinadores:</strong> LM Solution, UtilsHome, Studio
            Personal, Dentistas Pedreira, Clínica Guadá, Padoquinha Artesanal,
            Beauty Spot, Tais Baldasso - Psicóloga, MB Plásticos, Supermercados
            Portuga, Kozi Plast, Renata Venturini Atêlie, Barbearia Adilson
            Paiva, Rafa Modas, Bio, Mudde Vintage Design ::{' '}
            <strong>Convidados Especiais:</strong> Ballet Beth Rodrigues, Raoni
            Xavier, Amílcar Toledo e Duda Simões.
          </p>
          <div className="mt-8 text-center flex flex-col gap-3">
            <h2 className="text-xl font-bold">AGRADECIMENTO</h2>
            <p>
              Cada espetáculo é uma jornada única, e neste, fomos transportados
              para a profunda intensidade das emoções, enfrentamos desafios e
              testemunhamos a dedicação que permeia o balé da vida. Ano após
              ano, não se trata apenas de realizar uma apresentação; estamos
              construindo e preparando bailarinos, seres humanos que, para além
              da técnica e expressão, absorvem lições valiosas de disciplina,
              postura, responsabilidade e comprometimento desde muito jovens.
            </p>
            <p>
              Meu sincero agradecimento vai para nossos bailarinos e equipe,
              cuja dedicação e paixão deram vida a cada movimento. Aos pais,
              familiares e amigos que acreditam no poder transformador da arte,
              vocês são os alicerces que sustentam nossos sonhos. E também
              estendo minha gratidão aos convidados especiais desta noite! Por
              último, expresso minha gratidão a cada membro da plateia. Espero
              que a beleza e a emoção deste espetáculo deixem uma marca especial
              em suas memórias.
            </p>
            <div className="flex flex-col gap-2">
              <p>Este espetáculo é, sem dúvida, especial!</p>
              <p>
                Obrigada a Deus, à minha família e a todo o elenco e aos
                patrocinadores por tornarem isso possível.
              </p>
              <p>Com Carinho,</p>
              <p>Carol Pansani.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}
