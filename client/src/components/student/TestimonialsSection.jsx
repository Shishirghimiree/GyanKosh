// import React from 'react'

// const TestimonialsSection = () => {
//   return (
//     <div>
//         <h1>TestimonialsSection</h1>
//     </div>
//   )
// }

// export default TestimonialsSection

"use client"

import { useState, useEffect } from "react"
import { assets } from "../../assets/assets"

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student",
      company: "D University",
      content:
        "GyanKosh has transformed my learning experience. The platform is intuitive and the courses are comprehensive. I've improved my skills significantly in just a few months!",
      avatar: assets.profile_img2,
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "IT Professional",
      company: "TechSolutions",
      content:
        "As someone working full-time, GyanKosh's flexibility allowed me to upskill at my own pace. The quality of content and instructor support is exceptional.",
      avatar:assets.profile_img,
      rating: 5,
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Teacher",
      company: "Modern Public School",
      content:
        "GyanKosh has been an invaluable resource for my professional development. The platform offers a wide range of courses that have helped me enhance my teaching methodologies.",
      avatar:assets.profile_img,
      rating: 4,
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Entrepreneur",
      company: "StartUp Hub",
      content:
        "The business courses on GyanKosh provided me with practical knowledge that I could immediately apply to my startup. Highly recommended for aspiring entrepreneurs!",
      avatar: assets.profile_img3,
      rating: 5,
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Healthcare Professional",
      company: "City Hub",
      content:
        "GyanKosh's specialized healthcare courses helped me stay updated with the latest developments in my field. The certification is recognized and valued by employers.",
      avatar: assets.profile_img,
      rating: 4,
    },
    {
      id: 6,
      name: "Arjun Reddy",
      role: "Software Developer",
      company: "CC Solutions",
      content:
        "The programming courses on GyanKosh are well-structured and practical. I was able to build real-world projects that enhanced my portfolio significantly.",
      avatar: assets.profile_img3,
      rating: 5,
    },
  ]

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]]
    } else {
      const visibleItems = []
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length
        visibleItems.push(testimonials[index])
      }
      return visibleItems
    }
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
          {/* ★ */}
        </span>
      ))
  }

  return (
    <section className="py-1">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Learners Say</h2>
          <div className="w-20 h-1 bg-logocolor1 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how GyanKosh has helped thousands of learners achieve their educational and career goals through
            our comprehensive courses and supportive learning environment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[calc(33.333%-1rem)] transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-logocolor1 mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-left">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            className="bg-logocolor1 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-hover transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="bg-logocolor1 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-hover transition-colors duration-300"
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection