import './App.css'
import Chat from './components/Chat'
import Detail from './components/Detail'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Detail></Detail>} ></Route>
      <Route path='/chat' element={<Chat></Chat>} ></Route>
      </Routes>
    </div>
  )
}

export default App
