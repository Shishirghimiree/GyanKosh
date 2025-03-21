import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useUser,UserButton } from '@clerk/clerk-react'
// import { User } from 'lucide-react'

const NavBar = () => {
  const educatorData = dummyEducatorData
  const {user} = useUser()
  return (
    <div className='flex items-center justify-between px-8 md:px-8 border-b border-gray-500 py-3'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-10 md:h-12 object-contain w-28 lg:w-32'/>
      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        <p>Hi! {user ? user.fullName : 'Devlopers'}</p>
        {user?<UserButton/>: <img className='max-w-8' src={assets.profile_img}/>}
      </div>
    </div>
    
  )
}

export default NavBar