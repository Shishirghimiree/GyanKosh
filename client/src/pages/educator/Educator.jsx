import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/educator/Navbar'

const Educator = () => {
  return (
    <div>
<NavBar/>
        <div>
          {<Outlet/>}
        </div>
    </div>
  )
}

export default Educator
