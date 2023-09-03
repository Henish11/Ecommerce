import './App.scss'
import Header from './componnent/Header'
import Cart from './page/Cart'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
