import React from 'react'
import Navbar from '../components/Navbar' 
import MyTable from '../components/MyTable'
import "./home.css"

const Home = () => {
  return (
    <div className='hcontainter'>
      <Navbar />
      <MyTable />
      
    </div>
  )
}

export default Home
