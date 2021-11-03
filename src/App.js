import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'

import HeaderSec from './components/HeaderSec'
import NavBar from './components/NavBar'
import TodoSec from './components/TodoSec'
import GetPerks from './components/GetPerks'

const App = () => {
  return (
    <>
      <NavBar />
      <HeaderSec />
      <TodoSec />
      <GetPerks />
    </>
  )
}

export default App
