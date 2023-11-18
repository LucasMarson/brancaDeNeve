import { useState } from 'react'
import Modal from 'react-modal'

interface BalletPresentationProps {
  isOpen: boolean
  onClose: () => void
}

export default function BalletPresentationModal({
  isOpen,
  onClose,
}: BalletPresentationProps) {
  const [concordo, setConcordo] = useState<boolean>(false)

  const handleConcordo = () => {
    setConcordo(true)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={concordo ? onClose : undefined}
      contentLabel="Aviso - Apresentação de Ballet"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md max-w-xs md:max-w-md w-full mx-auto"
      overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-50"
    >
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Aviso</h2>
        <p className="text-sm mb-4">Caros espectadores,</p>
        <p className="text-sm mb-4">
          Estamos emocionados em apresentar a maravilhosa performance de ballet
          com o tema Branca de Neve. Nossos talentosos bailarinos têm trabalhado
          arduamente para criar uma experiência mágica para todos vocês.
        </p>
        <p className="text-sm mb-4">
          Para garantir que todos possam desfrutar plenamente do espetáculo,
          solicitamos gentilmente que mantenham seus celulares no modo avião
          durante a apresentação.
        </p>
        <p className="text-sm mb-4">
          Além disso, pedimos que não batam palmas ao final de cada coreografia
          para manter a atmosfera única da apresentação.
        </p>
        <p className="text-sm mb-4">
          Agradecemos sua compreensão e esperamos que aproveitem o espetáculo!
        </p>
        <label className="text-sm mb-4 flex gap-2">
          <input type="checkbox" checked={concordo} onChange={handleConcordo} />
          <span>Concordo com as orientações acima!</span>
        </label>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            concordo ? '' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={onClose}
          disabled={!concordo}
        >
          Fechar
        </button>
      </div>
    </Modal>
  )
}
