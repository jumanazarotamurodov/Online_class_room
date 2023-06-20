import React from 'react'
import "./log.css"
import { Link, Outlet } from 'react-router-dom'

const Log = () => {
  return (
    <div className='Kirish'>
      <h1 className='h1'>Kirish</h1>
      <div className="catigory">
        <Link to="/uquvchi"><span >Men O'quvchiman</span></Link>
        <Link to="/tech"><span >Men O'qituvchiman</span></Link>
        <Link to="/rektor"><span >Men Maktab Rahbariman</span></Link>
      </div>
    </div>
  )
}

export default Log 