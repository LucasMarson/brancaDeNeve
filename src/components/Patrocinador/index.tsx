import { Patrocinadores } from '@/db/patrocinadores'
import Image from 'next/image'

export default function Patrocinador() {
  return (
    <div id="section5" className="bg-bege-100 py-14">
      <div className="px-4 md:px-8 text-center">
        <h3 className="font-semibold text-2xl md:text-3xl">Patrocinadores</h3>
      </div>
      <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-5 sm:grid-cols-2 gap-4 items-center justify-center mt-8">
        {Patrocinadores.map((patrocinadores, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={patrocinadores.url}
              alt={patrocinadores.alt}
              width={120}
              height={60}
            />
            <p className="text-sm font-semibold mt-2 text-center">
              {patrocinadores.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
