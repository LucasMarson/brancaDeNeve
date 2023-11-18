import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface ActiveProps extends LinkProps {
  children: ReactElement
}

export function LinkActive({ children, ...rest }: ActiveProps) {
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className: `
          ${children.props.className}
          hover:text-purple-800
          border-b-2
          rounded-none 
          hover:border-b-2
          px-3 
          py-2
          text-purple-1000
          border-transparent 
          hover:border-esmeralda-800
          transition 
          duration-300 
          ease-in-out
        `,
      })}
    </Link>
  )
}
