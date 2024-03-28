import Link from 'next/link'
import { CalendarIcon, PlusIcon, HomeIcon } from 'lucide-react'

export const Header = () => {
  return (
    <header className="w-full  border-b border-border p-2 ">
      <nav className="flex justify-evenly items-center">
        <Link
          href={'/agendar'}
          className="flex items-center bg-primary-foreground border p-2 rounded border-border hover:bg-primary-foreground/90"
        >
          <PlusIcon className="w-4 h-4 mr-2.5" />
          Agendar um evento
        </Link>

        <Link
          href={'/'}
          className="flex items-center bg-primary-foreground border p-2 rounded border-border hover:bg-primary-foreground/90"
        >
          <HomeIcon className="w-4 h-4 mr-2.5" />
          Home
        </Link>

        <Link
          href={'/lucros'}
          className="flex items-center bg-primary-foreground border p-2 rounded border-border hover:bg-primary-foreground/90"
        >
          <CalendarIcon className="w-4 h-4 mr-2.5" />
          Lucros Mensais
        </Link>
      </nav>
    </header>
  )
}
