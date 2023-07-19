import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Game } from './components/Game'

function App() {
  return (
    <Router>
      <Routes>
        <Route index Component={Home} />
        <Route path="/game" Component={Game} />
      </Routes>
    </Router>
  )
}

export default App
