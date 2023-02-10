import React from 'react'
import ReactDOM from 'react-dom/client'
import {MainPage} from './pages/MainPage'
import {ReactRouter} from "./router/ReactRouter"
import './globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactRouter></ReactRouter>
  )
  
  // <MainPage></MainPage>