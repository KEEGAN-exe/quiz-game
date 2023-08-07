import { Link } from 'react-router-dom'
import { Input } from './Input'
import { Quiz } from './Quiz'
import { Score } from './Score'
import { useState } from 'react'

export const Game = () => {
  const [score, setScore] = useState(0)

  const updateScore = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    } else {
      // si el componente input retona false, se resta un punto
      score > 0 ? setScore(score - 1) : setScore(0)
    }
  }
  console.log(score)
  return (
    <div className="h-screen">
      <div className=" absolute text-2xl cursor-pointer right-8 top-8 shadow-xl hover:scale-110 duration-200 transition-all hidden lg:block">
        <Link to="/">❌</Link>
      </div>
      <div className="flex flex-col items-center w-full justify-between h-full">
        <Score score={score} />
        <Quiz />
        <Input updateScore={updateScore} />
      </div>
    </div>
  )
}
