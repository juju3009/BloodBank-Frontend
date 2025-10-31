import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './assets/components/Header'
import Footers from './assets/components/Footers'
import DashBoard from './assets/pages/DashBoard'
import AddNew from './assets/pages/AddNew'
import Edit from './assets/pages/Edit'
import Auth from './assets/pages/Auth'
import PageNotFound from './assets/pages/PageNotFound'

function App() {

  return (
    <>
    <Header/>
   <Routes>
    <Route path='' element={<DashBoard/>}/>
    <Route path='/add' element={<AddNew/>}/>
    <Route path='/edit' element={<Edit/>}/>
    {/* <Route path='/settings' element={<Settings/>}/> */}
    <Route path='/register' element={<Auth register/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   <Footers/>
    </>
  )
}

export default App
