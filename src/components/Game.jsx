import { Input } from './Input'
import { Quiz } from './Quiz'
import { Score } from './Score'

export const Game = () => {
  return (
    <div className="h-screen">
      <Score />
      <Quiz />
      <Input />
    </div>
  )
}
