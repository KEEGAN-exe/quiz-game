import { useState } from 'react'
import { BiSolidSend } from 'react-icons/bi'

export const Input = () => {
  const [input, setInput] = useState('')

  function handleInput() {
    if (input === '' || input === null || input === undefined) {
      alert('No hay nada')
    } else {
      console.log(input)
    }
  }

  return (
    <div className="w-full flex items-center justify-center bg-neutral-800 lg:rounded-t-2xl flex-col py-10">
      <div className="flex items-center justify-center w-full">
        <input
          className="bg-neutral-800 2xl:w-[25%] lg:w-[40%] py-[12px] px-4 outline-none rounded-md shadow-lg shadow-stone-900 h-auto border-gray-500 focus:ring-2 focus:ring-emerald-200/50 border-[1px] focus:border-emerald-400 transition-all ease-in-out duration-200 text-gray-100 w-[80%]"
          placeholder="Ingrese su respuesta"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-emerald-400 ml-[12px] p-2 flex items-center justify-center rounded-md cursor-pointer shadow-lg shadow-stone-950 opacity-[0.85] hover:opacity-100 transition-all duration-200"
          onClick={handleInput}
        >
          <BiSolidSend className="text-xl text-stone-100" />
        </button>
      </div>
    </div>
  )
}
