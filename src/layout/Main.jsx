import React from 'react'
import Header from '../component/Header'
import Footerr from '../component/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Header/>
        <div className='my-16'>
            <Outlet></Outlet>
        </div>
        <Footerr/>
    </div>
  )
}

export default Main