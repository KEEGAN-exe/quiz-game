import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'

export const Score = ({ score }) => {
  const [maxScore, setMaxScore] = useState(0)
  useEffect(() => {
    const localMax = localStorage.getItem('maxScore')
    if (localMax) {
      setMaxScore(parseInt(localMax))
    }
  }, [])

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score)
      localStorage.setItem('maxScore', score.toString())
    }
  }, [score, maxScore])

  return (
    <div className="text-white flex items-center justify-center w-full lg:pt-10 pt-4">
      <div className="flex items-center justify-between w-full text-center font-tek xl:text-lg text-sm">
        <div className="flex flex-col flex-grow basis-0">
          <h1>Preguntas acertadas</h1>
          <p>{score}</p>
        </div>
        <div>
          <h1>Puntaje mas alto</h1>
          <p>{maxScore}</p>
        </div>
        <div className="flex flex-col flex-grow basis-0 justify-center items-center">
          <a
            className="my-1 text-3xl flex hover:scale-105 transition-all duration-200"
            href="https://github.com/KEEGAN-exe"
            target="_blank"
          >
            <h1 className="mx-4 text-lg">KEGAAN-EXE</h1>
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number
}
