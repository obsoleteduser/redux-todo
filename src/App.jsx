
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem } from './redux/actions'
import { uid } from 'uid'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { ToastContainer } from 'react-toastify'

function App() {
 


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='posts' element={<Posts></Posts>}></Route>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
