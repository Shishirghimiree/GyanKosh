import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import CourseCard from '../../components/student/CourseCard'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import Footer from '../../components/student/Footer'
import CallToAction from '../../components/student/CallToAction'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-7 text-center'>
        <Hero/>
        <Companies/>
        <CoursesSection/>
        <TestimonialsSection/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home
