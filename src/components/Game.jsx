import { Link } from 'react-router-dom'
import { Input } from './Input'
import { Quiz } from './Quiz'
import { Score } from './Score'

export const Game = () => {
  return (
    <div className="h-screen">
      <div className=" absolute text-2xl cursor-pointer right-8 top-8 shadow-xl hover:scale-110 duration-200 transition-all hidden lg:block">
        <Link to="/">❌</Link>
      </div>
      <div className="flex flex-col items-center w-full justify-between h-full">
      <Score />
      <Quiz />
      <Input />
      </div>
    </div>
  )
}
