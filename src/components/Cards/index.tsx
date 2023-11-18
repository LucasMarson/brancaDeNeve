interface CardsProps {
  nome: string
  coreografo?: string
  elenco: string
  convidadoEspecial?: string
  ensaista?: string
  assistente?: string
}

export default function Cards({
  nome,
  coreografo,
  elenco,
  convidadoEspecial,
  ensaista,
  assistente,
}: CardsProps) {
  return (
    <div className="bg-white p-4 w-full rounded-md shadow-md flex flex-col">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="font-bold uppercase text-2xl">{nome}</h2>
          {convidadoEspecial && (
            <span className="flex flex-col gap-1 text-right jus">
              <p className="font-bold">Convidado Especial</p>
              {convidadoEspecial}
            </span>
          )}
        </div>
        {coreografo && (
          <span className="flex gap-1">
            <p className="font-bold">Coreografo:</p>
            {coreografo}
          </span>
        )}
        {ensaista && (
          <span className="flex gap-1">
            <p className="font-bold">Ensaísta:</p>
            {ensaista}
          </span>
        )}
        {assistente && (
          <span className="flex flex-col gap-1">
            <p className="font-bold">Assistente:</p>
            {assistente}
          </span>
        )}
        <div className="flex flex-col">
          <span className="font-bold">Elenco:</span>
          <span>{elenco}</span>
        </div>
      </div>
    </div>
  )
}
