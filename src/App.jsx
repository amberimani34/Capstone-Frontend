import {Route, Routes} from 'react-router';
import Nav from './components/Nav';
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import BookHere from './pages/BookHere'
import DesignRoom from './pages/DesignRoom'


function App() {
  return (
    <>
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/book' element={<BookHere />}/>
        <Route path='/design' element={<DesignRoom />}/>
      </Routes>

    </div>
      
    </>
  )
}


export default App
