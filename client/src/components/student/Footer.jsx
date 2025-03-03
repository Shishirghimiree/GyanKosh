// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <h1>Footer</h1>
//     </div>
//   )
// }
// export default Footer

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { assets } from "../../assets/assets"

export default function Footer() {
  return (
    <footer className="bg-[#4d8c40] text-white ">
      <div className="max-w-8xl mx-25 px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={assets.logo}
                alt="Gyan Kosh Logo"
                className="h-12 mr-2"
              />
              <h2 className="text-xl font-bold">Gyan Kosh</h2>
            </div>
            <p className="text-[#f0ebd1] mb-4 text-left">
              Empowering learners with knowledge and skills for a brighter future. Your trusted learning management
              system for educational excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#f0ebd1]">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-[#f0ebd1]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-[#f0ebd1]">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-[#f0ebd1]">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#6ca55f] pb-2">Quick Links</h3>
            <ul className="space-y-2 gap-2 grid grid-cols-2">
              <li>
                <a href={'/'} className="text-[#f0ebd1] hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href={'/course-list'} className="text-[#f0ebd1] hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-[#f0ebd1] hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#f0ebd1] hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#6ca55f] pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Education Street, GyanKosh City</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+977 9800000000</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@gyankosh.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-[#6ca55f] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-[#f0ebd1]">Stay updated with our latest courses and educational resources</p>
            </div>
            <div className="flex w-full md:w-auto border-logocolor1 border-2 rounded">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full md:w-64 text-[#f0ebd1] rounded-l focus:outline-none"
              />
              <button className="bg-[#4caf50] hover:bg-[#2d5425] px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#6ca55f] text-center">
          <p className="text-[#f0ebd1]">
            © {new Date().getFullYear()} Gyan Kosh. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}