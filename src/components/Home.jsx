import { Logo } from './Logo'
import '../custom.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Logo />
      <Link
        className="relative px-4 py-2 text-white bg-stone-900 border-2 border-transparent rounded-lg focus:outline-none animate-border-infinite text-xl mt-6 hover:scale-125 cursor-pointer transition-all duration-200 opacity-90 hover:opacity-100"
        to={'/game'}
      >
        Jugar
      </Link>
    </div>
  )
}
