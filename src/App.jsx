import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { About } from './components/About'
import { NotFound } from './components/NotFound'
import { Vehicles } from './components/Vehicles'

const App = () =>{
  return(
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App