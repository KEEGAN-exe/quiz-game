import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Quiz = () => {
  const [time, setTime] = useState(10)
  const [question, setQuestion] = useState(
    'cual es el resultado del siguiente ?'
  )
  useEffect(() => {
    if (time === 0) {
      return
    }
    const timer = setTimeout(() => {
      setTime(time - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [time])
  const codeString = `function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }
  
  function findPerfectNumber(limit) {
    const perfectNumbers = [];
    for (let num = 1; num <= limit; num++) {
      if (isPerfectNumber(num)) {
        perfectNumbers.push(num);
      }
    }
    return perfectNumbers;
  }
  
  // Ejemplo: Encontrar números perfectos hasta 10000
  const limit = 10000;
  const perfectNumbers = findPerfectNumber(limit);
  console.log('Números perfectos hasta', limit, ':', perfectNumbers);`
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className=" h-full w-full flex justify-around lg:justify-center lg:gap-20 items-center lg:flex-row flex-col">
        <div className="rounded-md lg:w-[40%] px-6 w-full">
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{
              padding: '30px',
              maxHeight: '650px',
              overflow: 'auto',
              borderRadius: '10px'
            }}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="px-6 lg:w-1/4 w-full">
          <div className="flex flex-col text-white text-center bg-zinc-800 p-4 rounded-lg shadow-2xl">
            <h1 className="text-white my-2 lg:text-2xl">PREGUNTAAAAAA</h1>
            <div className="w-full">
              <p className="bg-zinc-900 p-4 rounded-lg overflow-auto break-all">
                {question}
              </p>
            </div>
            <div className="mt-4">
              <h1 className="text-white">Tiempo restante para responder</h1>
              <p
                className={`lg:text-2xl ${
                  time < 5 && time > 0
                    ? 'animate-jump text-red-500 animate-infinite'
                    : ''
                }`}
              >
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
