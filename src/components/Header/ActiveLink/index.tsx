import { ReactNode } from 'react'
import { LinkActive } from './LinkActive'

interface ActiveLinkProps {
  children: ReactNode
  href: string
  onClick?: () => void // Adicione a propriedade onClick como opcional
}

export default function ActiveLink({
  children,
  href,
  onClick,
}: ActiveLinkProps) {
  return (
    <LinkActive href={href} onClick={onClick}>
      <span>{children}</span>
    </LinkActive>
  )
}
