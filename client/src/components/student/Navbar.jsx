// import React from 'react'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom'

// const Navbar = () => {

// const isCourseListPage = location.pathname.includes('/course-list')


//   return (
//     <div className={'flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 {isCourseListPage ? "bg-white" :"bg-cyan-100/70"}'}>
//         <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
//         <div className='hidden md:flex items-center gap-5 text-gray-500'>
//           <div>
//             <button>Become Educator</button>
//            | <Link to='/my-enrollments'>My Enrollments</Link>
//           </div>
//           <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
//         </div>
//         <div></div>
//     </div>
//   )
// }
// export default Navbar

"use client"

import { useContext, useState } from "react"
import { Link, Menu, X } from "lucide-react"
import { assets } from '../../assets/assets'
import { AppContext } from "../../context/AppContext"
import { useClerk,useUser,UserButton} from "@clerk/clerk-react"
import axios from "axios"
import { toast } from "react-toastify"

export function Navbar() {



  const {openSignIn}=useClerk()
  const {user} = useUser()


  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const {navigate,isEducator,backendUrl,setIsEducator,getToken}=useContext(AppContext)

  const becomeEducator = async()=>{
    try {
      if(isEducator){
        navigate('/educator')
        return
      }
      const token = await getToken()
      const {data} = await axios.get(backendUrl+'/api/educator/update-role',{headers:{Authorization:`Bearer ${token}`}})

      if(data.success){
        setIsEducator(true)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  return (
    <nav className="fixed top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-full border border-[#4CAF50]/10 bg-white shadow-sm">
          <div className="flex h-16 items-center px-6">
            <a onClick={()=>navigate('/')} className="flex items-center gap-2 cursor-pointer">
              <img
                src={assets.logo}
                alt="Gyan Kosh Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold text-[#556B2F]">Gyan Kosh</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-8">
              <a className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium cursor-pointer"onClick={()=>navigate('/course-list')}>
                Courses
              </a>
              { user &&
              <>
                <a onClick={()=>navigate('/my-enrollments')} className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium cursor-pointer">
                My Enrollments
              </a>
              </>
              }
              <a onClick={()=>navigate('/about-us')} className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium cursor-pointer">
                About
              </a>
              <a href="#" className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Desktop Sign In/Get Started */}
            <div className="hidden md:flex items-center gap-4">
              { user &&
              <>
              <button onClick={becomeEducator} className="text-[#556B2F] hover:text-[#4CAF50] transition-colors font-medium cursor-pointer">{isEducator ? 'Educator Dashboard':'Become Educator'}</button></>
              }
            { user ?<UserButton/> :
              <button onClick={() => openSignIn()} className="bg-[#4CAF50] hover:bg-[#556B2F] text-white rounded-full px-6 py-2 transition-colors cursor-pointer">
              Get Started
            </button>}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="ml-auto md:hidden text-[#556B2F] hover:text-[#4CAF50]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-[#556B2F] hover:text-[#4CAF50]">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 p-4 items-center cursor-pointer">
              <a
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={(event) => {
                  navigate('/course-list');
                  toggleMenu(event);
                }}
              >
                Courses
              </a>

             { user &&
             <>
              <a 
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={(event) => {
                  navigate('/my-enrollments');
                  toggleMenu(event);
                }}
              >
                My Enrollments
              </a>
              </>
              }

              <a
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={(event) => {
                  navigate('/about-us');
                  toggleMenu(event);
                }}
              >
                About
              </a>
              <a
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={(event) => {
                  navigate('/');
                  toggleMenu(event);
                }}
              >
                Contact
              </a>
              { user &&
              <>
                <button onClick={becomeEducator} className="text-[#556B2F] hover:text-[#4CAF50] transition-colors font-medium cursor-pointer">{isEducator ? 'Educator Dashboard':'Become Educator'}</button>
              </>
              }
              { user ?<UserButton/> :
                <button 
                className="bg-[#4CAF50] hover:bg-[#556B2F] text-white rounded-full px-6 py-2 transition-colors text-lg font-medium"
                onClick={toggleMenu}
                // onClick={e => openSignIn()}
              >
                Get Started
              </button>}
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

