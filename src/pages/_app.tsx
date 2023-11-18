import WarningModal from '@/components/WarningModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lexend_Deca as LexendDeca } from 'next/font/google'
import { useEffect, useState } from 'react'

const lexendDeca = LexendDeca({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <main className={lexendDeca.className}>
      <WarningModal isOpen={showModal} onClose={handleCloseModal} />

      <Component {...pageProps} />
    </main>
  )
}
