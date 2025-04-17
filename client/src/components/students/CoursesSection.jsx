import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        numquam sapiente veritatis dicta aliquid quam corporis quidem commodi
        aliquam eaque enim, ut vitae cupiditate sunt dignissimos id inventore et
        maxime.
      </p>
      <div className="">
        {allCourses.slice(0,4).map(()=>{})}
      </div>
      <Link
        to={'/course-list'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show All Courses
      </Link>
    </div>
  )
}

export default CoursesSection
