import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  const {currency,calculateRating} = useContext(AppContext)
  return (
    <Link to={`/course/`+ course._id} onClick={()=>scrollTo(0,0)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg '>
        <img className='w-full' src={course.courseThumbnail} alt="" />
        <div className='p-3 text-left'>
          <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
          <p className='text-gray-500'>{course.educator.name}</p>
          <div className='flex items-center space-x-2'>
            <p>{calculateRating(course)}</p>
            <div className='flex'>
              {[...Array(5)].map((_,i)=>(<img key={i} src={i<Math.floor(calculateRating(course))? assets.star: assets.star_blank} alt=''className='w-3.5 h-3.5'/>
              ))}
            </div>
            <p className='text-gray-500'>{course.courseRatings.length}</p>
          </div>
          <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.courseDiscount *course.coursePrice /100).toFixed(2)}</p> 
        </div>
    </Link>
  )
}
CourseCard.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    courseTitle: PropTypes.string.isRequired,
    courseThumbnail: PropTypes.string.isRequired,
    coursePrice: PropTypes.number.isRequired,
    courseDiscount: PropTypes.number,
    courseRatings: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      })
    ).isRequired
  }).isRequired
}

export default CourseCard




//! My Own Code started from here

// import { BookOpen, Clock } from "lucide-react"
// import { assets} from "../../assets/assets"
// import { Link } from "react-router-dom"

// export default function CourseCard() {
//   return (
//     <Link to={'/course'} onClick={()=>scrollTo(0,0)} className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow">
//       {/* Image and Price Section */}
//       <div className="relative">
//         <img
//           src={assets.course_1_thumbnail}
//           alt="Course thumbnail"
//           className="w-full h-[200px] object-cover bg-slate-100"
//         />
//         <div className="absolute top-4 right-4">
//           <span className="px-3 py-1.5 rounded-full bg-white text-sm font-semibold shadow-sm hover:bg-[#009548]">NPR 15,999</span>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-5 space-y-4">
//         {/* Badge and Title */}
//         <div className="flex flex-col space-y-3">
//           <div className="flex">
//             <span className="inline-flex items-start px-4 py-1 text-sm text-white font-medium bg-[#00A651] rounded-full">
//               Computer Science
//             </span>
//           </div>
//           <div className="space-y-1 text-center">
//             <h3 className="font-semibold text-xl text-gray-900 text-left">{} </h3>
//             <p className="text-gray-600 text-base text-left">
//               Master the essentials of Computer Science with our comprehensive...
//             </p>
//           </div>
//         </div>

//         {/* Instructor Info */}
//         <div className="flex items-center gap-2 pt-2">
//           <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
//             <img
//               src={assets.profile_img}
//               alt="Instructor avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span className="text-gray-600">Dr. John Smith</span>
//         </div>

//         {/* Course Meta Info */}
//         <div className="flex items-center gap-4 text-gray-600">
//           <div className="flex items-center gap-1.5">
//             <Clock className="h-4 w-4" />
//             <span>12 weeks</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <BookOpen className="h-4 w-4" />
//             <span>24 chapters</span>
//           </div>
//         </div>

//         {/* Button Section */}
//         <button className="w-full mt-2 px-4 py-2.5 text-white text-center bg-[#00A651] rounded-lg hover:bg-[#009548] transition-colors duration-200 cursor-pointer">
//           Enroll Now
//         </button>
//       </div>
//     </Link>
//   )
// }