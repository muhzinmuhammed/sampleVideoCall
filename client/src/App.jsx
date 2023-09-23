import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Room from './Pages/Home/Room'
function App() {
  

  return (
    <>
      <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/room/:roomId' element={<Room/>}/>
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
