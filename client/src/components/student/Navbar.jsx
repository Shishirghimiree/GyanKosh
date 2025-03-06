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
import { Menu, X } from "lucide-react"
import { assets } from '../../assets/assets'
import { AppContext } from "../../context/AppContext"
import CoursesList from "../../pages/student/CoursesList"


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const {navigate}=useContext(AppContext)

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
              <a href={'/course-list'} className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium">
                Courses
              </a>
              <a href="#" className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-[#4CAF50] hover:text-[#556B2F] transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Desktop Sign In/Get Started */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-[#556B2F] hover:text-[#4CAF50] transition-colors font-medium">
                Sign in
              </a>
              <button className="bg-[#4CAF50] hover:bg-[#556B2F] text-white rounded-full px-6 py-2 transition-colors">
                Get Started
              </button>
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
            <nav className="flex flex-col gap-4 p-4">
              <a
                href={'/course-list'}
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={toggleMenu}
              >
                Courses
              </a>
              <a
                href="#"
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#"
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-2 py-1 text-lg font-medium text-[#556B2F] hover:text-[#4CAF50] transition-colors"
                onClick={toggleMenu}
              >
                Sign in
              </a>
              <button
                className="bg-[#4CAF50] hover:bg-[#556B2F] text-white rounded-full px-6 py-2 transition-colors text-lg font-medium"
                onClick={toggleMenu}
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

