import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/product/:productId' element={<ProductDetails/>}/>
  </Routes>
  </BrowserRouter>
)
