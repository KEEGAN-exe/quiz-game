import { useState } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import PropTypes from 'prop-types'
import { alerta } from '../alerta.js'

export const Input = ({ updateScore }) => {
  const [input, setInput] = useState('')

  function handleInput() {
    fetch('http://localhost:3000/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input })
    }).then((res) => {
      if (res.status === 200) {
        updateScore(true)
        alerta('Tu respuesta es correcta', 'success')
      } else {
        updateScore(false)
        alerta('Tu respuesta es incorrecta', 'error')
      }
    })

    console.log('xd')
  }

  return (
    <div className="w-full flex items-center justify-center bg-neutral-800 lg:rounded-t-2xl flex-col py-10">
      <div className="flex items-center justify-center w-full">
        <input
          className="bg-neutral-800 2xl:w-[25%] lg:w-[40%] py-[12px] px-4 outline-none rounded-md shadow-lg shadow-stone-900 h-auto border-gray-500 focus:ring-2 focus:ring-emerald-200/50 border-[1px] focus:border-emerald-400 transition-all ease-in-out duration-200 text-gray-100 w-[80%]"
          placeholder="Ingrese su respuesta"
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          // cuando se presione el enter se envia la respuesta
          onKeyDown={(e) => e.key === 'Enter' && handleInput()}
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

Input.propTypes = {
  updateScore: PropTypes.func
}
