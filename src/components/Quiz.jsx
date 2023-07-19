import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Quiz = () => {
  const [time, setTime] = useState(10)
  const [question, setQuestion] = useState(
    'cual es el resultado del siguiente codigofadsfadsfdasasdfdfslkjdafsklfdaslkjfadsljkfadslkjafdsljkafdslkjalfdksjadfklsdfasjkldfasjklfdsakjlfdsakljsfadklalfsjkjklfasjklfasljkadafsdfasdffad ?'
  )
  useEffect(() => {
    if (time === 0) return
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
    <div className="flex justify-center items-center h-[80%] pt-[100px] pb-10 lg:pb-0">
      <div className=" h-full w-full flex justify-evenly items-center lg:flex-row flex-col">
        <div className="rounded-md lg:w-[40%] px-6 w-full">
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{
              padding: '30px',
              maxHeight: '700px'
            }}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="flex flex-col text-white text-center bg-zinc-800 px-4 py-4 rounded-lg shadow-2xl">
          <h1 className="text-white my-2 text-2xl">PREGUNTAAAAAA</h1>
          <p className="bg-zinc-900 p-4 rounded-lg max-w-[400px] overflow-auto break-all">
            {question}
          </p>
          <div className="mt-4">
            <h1 className="text-white">Tiempo restante para responder</h1>
            <p className={`text-2xl ${time < 5 && time > 0 ? 'animate-jump text-red-500 animate-infinite' : 'text-red-500'}`}>
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
